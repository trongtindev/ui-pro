<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import type { CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui'
import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/dashboard-search'
import { tv } from '../utils/tv'

const appConfigDashboardSearch = _appConfig as AppConfig & { uiPro: { dashboardSearch: Partial<typeof theme> } }

const dashboardSearch = tv({ extend: tv(theme), ...(appConfigDashboardSearch.uiPro?.dashboardSearch || {}) })

export interface DashboardSearchProps<T extends CommandPaletteItem = CommandPaletteItem> {
  /**
   * The icon displayed in the search input.
   * @defaultValue appConfig.ui.icons.search
   * @IconifyIcon
   */
  icon?: string
  /**
   * Placeholder for the command palette search input.
   */
  placeholder?: string
  /** When `true`, the loading icon will be displayed. */
  loading?: boolean
  /**
   * The icon when the `loading` prop is `true`.
   * @defaultValue appConfig.ui.icons.loading
   * @IconifyIcon
   */
  loadingIcon?: string
  /**
   * Keyboard shortcut to open the search (used by [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts))
   * @defaultValue 'meta_k'
   */
  shortcut?: string
  groups?: CommandPaletteGroup<T>[]
  /**
   * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
   * @defaultValue {}
   */
  fuse?: UseFuseOptions<T>
  /**
   * When `true`, the theme command will be added to the groups.
   * @defaultValue true
   */
  colorMode?: boolean
  class?: any
  ui?: Partial<typeof dashboardSearch.slots>
}
</script>

<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import { defu } from 'defu'
import { useAppConfig, useColorMode, defineShortcuts, useRuntimeHook } from '#imports'
import { useLocalePro } from '../composables/useLocalePro'

const props = withDefaults(defineProps<DashboardSearchProps>(), {
  shortcut: 'meta_k',
  colorMode: true
})
const slots = defineSlots<CommandPaletteSlots<CommandPaletteGroup<CommandPaletteItem>, CommandPaletteItem>>()

const open = defineModel<boolean>('open', { default: false })
const searchTerm = defineModel<string>('searchTerm', { default: '' })

useRuntimeHook('dashboard:search:toggle', () => {
  open.value = !open.value
})

const appConfig = useAppConfig()
// eslint-disable-next-line vue/no-dupe-keys
const colorMode = useColorMode()
const { t } = useLocalePro()

const fuse = computed(() => defu({}, props.fuse, {
  fuseOptions: {
  }
}))

// eslint-disable-next-line vue/no-dupe-keys
const ui = dashboardSearch()

const groups = computed(() => {
  const groups = []

  groups.push(...(props.groups || []))

  if (props.colorMode && !colorMode?.forced) {
    groups.push({
      id: 'theme',
      label: t('dashboardSearch.theme'),
      items: [{
        label: t('colorMode.system'),
        icon: appConfig.ui.icons.system,
        active: colorMode.preference === 'system',
        onSelect: () => {
          colorMode.preference = 'system'
        }
      }, {
        label: t('colorMode.light'),
        icon: appConfig.ui.icons.light,
        active: colorMode.preference === 'light',
        onSelect: () => {
          colorMode.preference = 'light'
        }
      }, {
        label: t('colorMode.dark'),
        icon: appConfig.ui.icons.dark,
        active: colorMode.preference === 'dark',
        onSelect: () => {
          colorMode.preference = 'dark'
        }
      }]
    })
  }

  return groups
})

function onSelect(item: CommandPaletteItem) {
  if (item.disabled) {
    return
  }

  // Close modal on select
  open.value = false
  // Reset search term on select
  searchTerm.value = ''
}

defineShortcuts({
  [props.shortcut]: {
    usingInput: true,
    handler: () => open.value = !open.value
  }
})

const commandPaletteRef = useTemplateRef('commandPaletteRef')

defineExpose({
  commandPaletteRef
})
</script>

<template>
  <UModal v-model:open="open" :class="ui.modal({ class: props.class })">
    <template #content>
      <UCommandPalette
        ref="commandPaletteRef"
        v-model:search-term="searchTerm"
        :icon="icon"
        :placeholder="placeholder"
        :loading="loading"
        :loading-icon="loadingIcon"
        :groups="groups"
        :fuse="fuse"
        close
        @update:model-value="onSelect"
        @update:open="open = $event"
      >
        <template v-for="(_, name) in slots" #[name]="slotData: any">
          <slot :name="name" v-bind="slotData" />
        </template>
      </UCommandPalette>
    </template>
  </UModal>
</template>
