<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import type { ButtonProps } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/dashboard-sidebar-toggle'
import { tv } from '../utils/tv'

const appConfigDashboardSidebarToggle = _appConfig as AppConfig & { uiPro: { dashboardSidebarToggle: Partial<typeof theme> } }

const dashboardSidebarToggle = tv({ extend: tv(theme), ...(appConfigDashboardSidebarToggle.uiPro?.dashboardSidebarToggle || {}) })

export interface DashboardSidebarToggleProps extends /** @vue-ignore */ Pick<ButtonProps, 'as' | 'size' | 'disabled' | 'ui'> {
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

const props = withDefaults(defineProps<DashboardSidebarToggleProps>(), {
  color: 'neutral',
  variant: 'ghost',
  side: 'left'
})

const rootProps = useForwardProps(reactivePick(props, 'color', 'variant', 'size'))

const appConfig = useAppConfig()
const { sidebarOpen, toggleSidebar } = useDashboard({ sidebarOpen: ref(false), toggleSidebar: () => {} })
const { t } = useLocalePro()
</script>

<template>
  <UButton
    v-bind="rootProps"
    :aria-label="sidebarOpen ? t('dashboardSidebarToggle.close') : t('dashboardSidebarToggle.open')"
    :icon="sidebarOpen ? appConfig.ui.icons.close : appConfig.ui.icons.menu"
    :class="dashboardSidebarToggle({ class: props.class, side: props.side })"
    @click="toggleSidebar"
  />
</template>
