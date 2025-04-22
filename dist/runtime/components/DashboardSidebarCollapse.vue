<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import type { ButtonProps } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/dashboard-sidebar-collapse'
import { tv } from '../utils/tv'

const appConfigDashboardSidebarCollapse = _appConfig as AppConfig & { uiPro: { dashboardSidebarCollapse: Partial<typeof theme> } }

const dashboardSidebarCollapse = tv({ extend: tv(theme), ...(appConfigDashboardSidebarCollapse.uiPro?.dashboardSidebarCollapse || {}) })

export interface DashboardSidebarCollapseProps extends /** @vue-ignore */ Pick<ButtonProps, 'as' | 'size' | 'disabled' | 'ui'> {
  side?: 'left' | 'right'
  /**
   * @defaultValue 'neutral'
   */
  color?: ButtonProps['color']
  /**
   * @defaultValue 'ghost'
   */
  variant?: ButtonProps['variant']
  class?: any
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { useForwardProps } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useAppConfig } from '#imports'
import { useLocalePro } from '../composables/useLocalePro'
import { useDashboard } from '../utils/dashboard'

const props = withDefaults(defineProps<DashboardSidebarCollapseProps>(), {
  color: 'neutral',
  variant: 'ghost',
  side: 'left'
})

const rootProps = useForwardProps(reactivePick(props, 'color', 'variant', 'size'))

const appConfig = useAppConfig()
const { sidebarCollapsed, collapseSidebar } = useDashboard({ sidebarCollapsed: ref(false), collapseSidebar: () => {} })
const { t } = useLocalePro()
</script>

<template>
  <UButton
    v-bind="rootProps"
    :aria-label="sidebarCollapsed ? t('dashboardSidebarCollapse.expand') : t('dashboardSidebarCollapse.collapse')"
    :icon="sidebarCollapsed ? appConfig.ui.icons.panelOpen : appConfig.ui.icons.panelClose"
    :class="dashboardSidebarCollapse({ class: props.class, side: props.side })"
    @click="collapseSidebar?.(!sidebarCollapsed)"
  />
</template>
