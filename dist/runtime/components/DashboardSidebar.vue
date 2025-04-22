<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import type { ButtonProps, DrawerProps, ModalProps, SlideoverProps } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/dashboard-sidebar'
import type { UseResizableProps } from '../composables/useResizable'
import { tv } from '../utils/tv'

const appConfig = _appConfig as AppConfig & { uiPro: { dashboardSidebar: Partial<typeof theme> } }

const dashboardSidebar = tv({ extend: tv(theme), ...(appConfig.uiPro?.dashboardSidebar || {}) })

type DashboardSidebarMode = 'modal' | 'slideover' | 'drawer'
type DashboardSidebarMenu<T> = T extends 'modal' ? ModalProps : T extends 'slideover' ? SlideoverProps : T extends 'drawer' ? DrawerProps : never

export interface DashboardSidebarProps<T> extends Pick<UseResizableProps, 'id' | 'side' | 'minSize' | 'maxSize' | 'defaultSize' | 'resizable' | 'collapsible' | 'collapsedSize'> {
  /**
   * The mode of the sidebar menu.
   * @defaultValue 'modal'
   */
  mode?: T
  /**
   * The props for the sidebar menu component.
   */
  menu?: DashboardSidebarMenu<T>
  /**
   * Customize the toggle button to open the sidebar.
   * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
   * @defaultValue true
   */
  toggle?: boolean | Partial<ButtonProps>
  /**
   * The side to render the toggle button on.
   * @defaultValue 'left'
   */
  toggleSide?: 'left' | 'right'
  class?: any
  ui?: Partial<typeof dashboardSidebar.slots>
}

export interface DashboardSidebarSlots {
  'header'(props: { collapsed?: boolean, collapse?: (value: boolean) => void }): any
  'default'(props: { collapsed?: boolean, collapse?: (value: boolean) => void }): any
  'footer'(props: { collapsed?: boolean, collapse?: (value: boolean) => void }): any
  'toggle'(props?: { open: boolean, toggle: () => void }): any
  'content'(props?: {}): any
  'resize-handle'(props: { onMouseDown: (e: MouseEvent) => void, onTouchStart: (e: TouchEvent) => void }): any
}
</script>

<script setup lang="ts" generic="T extends DashboardSidebarMode">
import { ref, computed, toRef, useId, watch } from 'vue'
import { defu } from 'defu'
import { createReusableTemplate } from '@vueuse/core'
import { useRuntimeHook } from '#imports'
import USlideover from '@nuxt/ui/components/Slideover.vue'
import UModal from '@nuxt/ui/components/Modal.vue'
import UDrawer from '@nuxt/ui/components/Drawer.vue'
import { useResizable } from '../composables/useResizable'
import { useDashboard } from '../utils/dashboard'

const props = withDefaults(defineProps<DashboardSidebarProps<T>>(), {
  side: 'left',
  mode: 'slideover' as never,
  toggle: true,
  toggleSide: 'left',
  minSize: 10,
  maxSize: 20,
  defaultSize: 15,
  resizable: false,
  collapsible: false,
  collapsedSize: 0
})
const slots = defineSlots<DashboardSidebarSlots>()

const open = defineModel<boolean>('open', { default: false })
const collapsed = defineModel<boolean>('collapsed', { default: false })

const dashboardContext = useDashboard({
  storageKey: 'dashboard',
  unit: '%',
  sidebarOpen: ref(false),
  sidebarCollapsed: ref(false)
})

const id = `${dashboardContext.storageKey}-sidebar-${props.id || useId()}`

const { el, size, collapse, isCollapsed, isDragging, onMouseDown, onTouchStart } = useResizable(id, toRef(() => ({ ...dashboardContext, ...props })), { collapsed })

const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate()
const [DefineResizeHandleTemplate, ReuseResizeHandleTemplate] = createReusableTemplate()

useRuntimeHook('dashboard:sidebar:toggle', () => {
  open.value = !open.value
})

useRuntimeHook('dashboard:sidebar:collapse', (value: boolean) => {
  isCollapsed.value = value
})

watch(open, () => dashboardContext.sidebarOpen!.value = open.value, { immediate: true })
watch(isCollapsed, () => dashboardContext.sidebarCollapsed!.value = isCollapsed.value, { immediate: true })

const ui = computed(() => dashboardSidebar({
  side: props.side
}))

const Menu = computed(() => ({
  slideover: USlideover,
  modal: UModal,
  drawer: UDrawer
})[props.mode as DashboardSidebarMode])

const menuProps = toRef(() => defu(props.menu, {
  content: {
    onOpenAutoFocus: (e: Event) => e.preventDefault()
  }
}, props.mode === 'modal' ? { fullscreen: true, transition: false } : props.mode === 'slideover' ? { side: 'left' } : {}) as DashboardSidebarMenu<T>)
</script>

<template>
  <DefineToggleTemplate>
    <slot name="toggle" :open="open" :toggle="toggle">
      <UDashboardSidebarToggle
        v-if="toggle"
        v-bind="(typeof toggle === 'object' ? toggle as Partial<ButtonProps> : {})"
        :side="toggleSide"
        :class="ui.toggle({ class: props.ui?.toggle, toggleSide })"
      />
    </slot>
  </DefineToggleTemplate>

  <DefineResizeHandleTemplate>
    <slot name="resize-handle" :on-mouse-down="onMouseDown" :on-touch-start="onTouchStart">
      <UDashboardResizeHandle
        v-if="resizable"
        :aria-controls="id"
        :class="ui.handle({ class: props.ui?.handle })"
        @mousedown="onMouseDown"
        @touchstart="onTouchStart"
      />
    </slot>
  </DefineResizeHandleTemplate>

  <ReuseResizeHandleTemplate v-if="side === 'right'" />

  <div
    :id="id"
    ref="el"
    :data-collapsed="isCollapsed"
    :data-dragging="isDragging"
    :class="ui.root({ class: [props.class, props.ui?.root] })"
    :style="{ '--width': `${size || 0}${dashboardContext.unit}` }"
  >
    <div v-if="!!slots.header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header" :collapsed="isCollapsed" :collapse="collapse" />
    </div>

    <div :class="ui.body({ class: props.ui?.body })">
      <slot :collapsed="isCollapsed" :collapse="collapse" />
    </div>

    <div v-if="!!slots.footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" :collapsed="isCollapsed" :collapse="collapse" />
    </div>
  </div>

  <ReuseResizeHandleTemplate v-if="side === 'left'" />

  <Menu
    v-model:open="open"
    v-bind="menuProps"
    :ui="{
      overlay: ui.overlay({ class: props.ui?.overlay }),
      content: ui.content({ class: props.ui?.content })
    }"
  >
    <template #content>
      <slot name="content">
        <div v-if="!!slots.header || mode !== 'drawer'" :class="ui.header({ class: props.ui?.header, menu: true })">
          <ReuseToggleTemplate v-if="mode !== 'drawer' && toggleSide === 'left'" />

          <slot name="header" />

          <ReuseToggleTemplate v-if="mode !== 'drawer' && toggleSide === 'right'" />
        </div>

        <div :class="ui.body({ class: props.ui?.body, menu: true })">
          <slot />
        </div>

        <div v-if="!!slots.footer" :class="ui.footer({ class: props.ui?.footer, menu: true })">
          <slot name="footer" />
        </div>
      </slot>
    </template>
  </Menu>
</template>
