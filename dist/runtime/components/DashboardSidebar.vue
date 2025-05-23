<script>
import theme from "#build/ui-pro/dashboard-sidebar";
</script>

<script setup>
import { ref, computed, toRef, useId, watch } from "vue";
import { defu } from "defu";
import { createReusableTemplate } from "@vueuse/core";
import USlideover from "@nuxt/ui/components/Slideover.vue";
import UModal from "@nuxt/ui/components/Modal.vue";
import UDrawer from "@nuxt/ui/components/Drawer.vue";
import { useAppConfig, useRuntimeHook, useRoute } from "#imports";
import { useResizable } from "../composables/useResizable";
import { useDashboard } from "../utils/dashboard";
import { tv } from "../utils/tv";
const props = defineProps({
  mode: { type: null, required: false, default: "slideover" },
  menu: { type: null, required: false },
  toggle: { type: [Boolean, Object], required: false, default: true },
  toggleSide: { type: String, required: false, default: "left" },
  class: { type: null, required: false },
  ui: { type: null, required: false },
  id: { type: String, required: false },
  side: { type: String, required: false, default: "left" },
  minSize: { type: Number, required: false, default: 10 },
  maxSize: { type: Number, required: false, default: 20 },
  defaultSize: { type: Number, required: false, default: 15 },
  resizable: { type: Boolean, required: false, default: false },
  collapsible: { type: Boolean, required: false, default: false },
  collapsedSize: { type: Number, required: false, default: 0 }
});
const slots = defineSlots();
const open = defineModel("open", { type: Boolean, ...{ default: false } });
const collapsed = defineModel("collapsed", { type: Boolean, ...{ default: false } });
const route = useRoute();
const appConfig = useAppConfig();
const dashboardContext = useDashboard({
  storageKey: "dashboard",
  unit: "%",
  sidebarOpen: ref(false),
  sidebarCollapsed: ref(false)
});
const id = `${dashboardContext.storageKey}-sidebar-${props.id || useId()}`;
const { el, size, collapse, isCollapsed, isDragging, onMouseDown, onTouchStart } = useResizable(id, toRef(() => ({ ...dashboardContext, ...props })), { collapsed });
const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
const [DefineResizeHandleTemplate, ReuseResizeHandleTemplate] = createReusableTemplate();
useRuntimeHook("dashboard:sidebar:toggle", () => {
  open.value = !open.value;
});
useRuntimeHook("dashboard:sidebar:collapse", (value) => {
  isCollapsed.value = value;
});
watch(open, () => dashboardContext.sidebarOpen.value = open.value, { immediate: true });
watch(isCollapsed, () => dashboardContext.sidebarCollapsed.value = isCollapsed.value, { immediate: true });
watch(() => route.fullPath, () => {
  open.value = false;
});
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.dashboardSidebar || {} })({
  side: props.side
}));
const Menu = computed(() => ({
  slideover: USlideover,
  modal: UModal,
  drawer: UDrawer
})[props.mode]);
const menuProps = toRef(() => defu(props.menu, {
  content: {
    onOpenAutoFocus: (e) => e.preventDefault()
  }
}, props.mode === "modal" ? { fullscreen: true, transition: false } : props.mode === "slideover" ? { side: "left" } : {}));
function toggleOpen() {
  open.value = !open.value;
}
</script>

<template>
  <DefineToggleTemplate>
    <slot name="toggle" :open="open" :toggle="toggleOpen">
      <UDashboardSidebarToggle
        v-if="toggle"
        v-bind="typeof toggle === 'object' ? toggle : {}"
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
