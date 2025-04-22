<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import type { ButtonProps, ButtonSlots, KbdProps } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/dashboard-search-button'
import { tv } from '../utils/tv'

const appConfigDashboardSearchButton = _appConfig as AppConfig & { uiPro: { dashboardSearchButton: Partial<typeof theme> } }

const dashboardSearchButton = tv({ extend: tv(theme), ...(appConfigDashboardSearchButton.uiPro?.dashboardSearchButton || {}) })

export interface DashboardSearchButtonProps {
  /**
   * The icon displayed in the button.
   * @defaultValue appConfig.ui.icons.search
   * @IconifyIcon
   */
  icon?: string
  /**
   * The label displayed in the button.
   * @defaultValue t('dashboardSearchButton.label')
   */
  label?: string
  /**
   * The color of the button.
   * @defaultValue 'neutral'
   */
  color?: ButtonProps['color']
  /**
   * The variant of the button.
   * Defaults to 'outline' when not collapsed, 'ghost' when collapsed.
   */
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  /**
   * Whether the button is collapsed.
   * @defaultValue false
   */
  collapsed?: boolean
  /**
   * The keyboard keys to display in the button.
   * `{ variant: 'subtle' }`{lang="ts-type"}
   * @defaultValue ['meta', 'k']
   */
  kbds?: KbdProps['value'][] | KbdProps[]
  ui?: Partial<typeof dashboardSearchButton.slots> & ButtonProps['ui']
  class?: any
}
</script>

<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useAppConfig } from '#imports'
import { useLocalePro } from '../composables/useLocalePro'
import { transformUI } from '../utils'
import { useDashboard } from '../utils/dashboard'

const props = withDefaults(defineProps<DashboardSearchButtonProps>(), {
  color: 'neutral',
  collapsed: false,
  kbds: () => ['meta', 'k']
})
const slots = defineSlots<ButtonSlots>()

const rootProps = useForwardProps(reactivePick(props, 'color', 'size'))

const appConfig = useAppConfig()
const { toggleSearch } = useDashboard({ toggleSearch: () => {} })
const { t } = useLocalePro()

// eslint-disable-next-line vue/no-dupe-keys
const ui = dashboardSearchButton()
</script>

<template>
  <UButton
    :icon="icon || appConfig.ui.icons.search"
    :label="label || t('dashboardSearchButton.label')"
    :variant="variant || (collapsed ? 'ghost' : 'outline')"
    v-bind="{
      ...rootProps,
      ...(collapsed ? {
        'square': true,
        'label': undefined,
        'aria-label': label || t('dashboardSearchButton.label')
      } : {})
    }"
    :class="ui.base({ class: [props.class, props.ui?.base] })"
    :ui="transformUI(ui)"
    @click="toggleSearch"
  >
    <template v-for="(_, name) in slots" #[name]="slotData: any">
      <slot :name="name" v-bind="slotData" />
    </template>

    <template v-if="!collapsed" #trailing>
      <div :class="ui.trailing({ class: props.ui?.trailing })">
        <template v-if="kbds?.length">
          <UKbd v-for="(kbd, index) in kbds" :key="index" variant="subtle" v-bind="typeof kbd === 'string' ? { value: kbd } : kbd" />
        </template>
      </div>
    </template>
  </UButton>
</template>
