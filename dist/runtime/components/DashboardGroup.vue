<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/dashboard-group'
import type { UseResizableProps } from '../composables/useResizable'
import { tv } from '../utils/tv'

const appConfig = _appConfig as AppConfig & { uiPro: { dashboardGroup: Partial<typeof theme> } }

const dashboardGroup = tv({ extend: tv(theme), ...(appConfig.uiPro?.dashboardGroup || {}) })

export interface DashboardGroupProps extends Pick<UseResizableProps, 'storage' | 'storageKey' | 'persistent' | 'unit'> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
}

export interface DashboardGroupSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { Primitive } from 'reka-ui'
import { useNuxtApp } from '#imports'
import { provideDashboardContext } from '../utils/dashboard'

const props = withDefaults(defineProps<DashboardGroupProps>(), {
  storage: 'cookie',
  storageKey: 'dashboard',
  persistent: true,
  unit: '%'
})
defineSlots<DashboardGroupSlots>()

const nuxtApp = useNuxtApp()

const sidebarOpen = ref(false)
const sidebarCollapsed = ref(false)

provideDashboardContext({
  storage: props.storage,
  storageKey: props.storageKey,
  persistent: props.persistent,
  unit: props.unit,
  sidebarOpen,
  toggleSidebar: () => {
    nuxtApp.hooks.callHook('dashboard:sidebar:toggle')
  },
  sidebarCollapsed,
  collapseSidebar: (collapsed: boolean) => {
    nuxtApp.hooks.callHook('dashboard:sidebar:collapse', collapsed)
  },
  toggleSearch: () => {
    nuxtApp.hooks.callHook('dashboard:search:toggle')
  }
})
</script>

<template>
  <Primitive :as="as" :class="dashboardGroup({ class: props.class })">
    <slot />
  </Primitive>
</template>
