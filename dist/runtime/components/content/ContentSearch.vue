<script lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { AppConfig } from '@nuxt/schema'
import type { LinkProps, CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui'
import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/content/content-search'
import { tv } from '../../utils/tv'

const appConfigContentSearch = _appConfig as AppConfig & { uiPro: { contentSearch: Partial<typeof theme> } }

const contentSearch = tv({ extend: tv(theme), ...(appConfigContentSearch.uiPro?.contentSearch || {}) })

export interface ContentSearchLink extends Omit<LinkProps, 'custom'> {
  label?: string
  description?: string
  /**
   * @IconifyIcon
   */
  icon?: string
  children?: ContentSearchLink[]
}

export interface ContentSearchFile {
  id: string
  title: string
  titles: string[]
  level: number
  content: string
}

export interface ContentSearchItem extends Omit<LinkProps, 'custom'>, CommandPaletteItem {
  level?: number
  /**
   * @IconifyIcon
   */
  icon?: string
}

export interface ContentSearchProps<T> {
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
  /** Links group displayed as the first group in the command palette. */
  links?: T[]
  navigation?: ContentNavigationItem[]
  /** Custom groups displayed between navigation and color mode group. */
  groups?: CommandPaletteGroup<ContentSearchItem>[]
  files?: ContentSearchFile[]
  /**
   * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
   * @defaultValue { fuseOptions: { includeMatches: true } }
   */
  fuse?: UseFuseOptions<T>
  /**
   * When `true`, the theme command will be added to the groups.
   * @defaultValue true
   */
  colorMode?: boolean
  class?: any
  ui?: Partial<typeof contentSearch.slots>
}
</script>

<script setup lang="ts" generic="T extends ContentSearchLink">
import { computed, useTemplateRef } from 'vue'
import { defu } from 'defu'
import { useAppConfig, useColorMode, defineShortcuts } from '#imports'
import { useContentSearch } from '../../composables/useContentSearch'
import { useLocalePro } from '../../composables/useLocalePro'

const props = withDefaults(defineProps<ContentSearchProps<T>>(), {
  shortcut: 'meta_k',
  colorMode: true
})
const slots = defineSlots<CommandPaletteSlots<CommandPaletteGroup<ContentSearchItem>, ContentSearchItem>>()

const searchTerm = defineModel<string>('searchTerm', { default: '' })

const appConfig = useAppConfig()
const { open } = useContentSearch()
// eslint-disable-next-line vue/no-dupe-keys
const colorMode = useColorMode()
const { t } = useLocalePro()

const fuse = computed(() => defu({}, props.fuse, {
  fuseOptions: {
    includeMatches: true
  }
}))

// eslint-disable-next-line vue/no-dupe-keys
const ui = contentSearch()

function mapLinksItems(links: T[]): ContentSearchItem[] {
  return links.flatMap(link => [{
    ...link,
    suffix: link.description,
    icon: link.icon || appConfig.ui.icons.file
  }, ...(link.children?.map(child => ({
    ...child,
    prefix: link.label + ' >',
    suffix: child.description,
    icon: child.icon || link.icon || appConfig.ui.icons.file
  })) || [])])
}

function mapNavigationItems(children: ContentNavigationItem[], parent?: ContentNavigationItem): ContentSearchItem[] {
  return children.flatMap((link) => {
    if (link.children?.length) {
      return mapNavigationItems(link.children, link)
    }

    return props.files?.filter(file => file.id === link.path || file.id.startsWith(`${link.path}#`))?.map(file => mapFile(file, link, parent)) || []
  })
}

function mapFile(file: ContentSearchFile, link: ContentNavigationItem, parent?: ContentNavigationItem): ContentSearchItem {
  const prefix = [...new Set([parent?.title, ...file.titles].filter(Boolean))]

  return {
    prefix: prefix?.length ? (prefix.join(' > ') + ' >') : undefined,
    label: file.id === link.path ? link.title : file.title,
    suffix: file.content.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
    to: file.id,
    icon: (link.icon || parent?.icon || (file.level > 1 ? appConfig.ui.icons.hash : appConfig.ui.icons.file)) as string,
    level: file.level
  }
}

const groups = computed(() => {
  const groups = []

  if (props.links?.length) {
    groups.push({ id: 'links', label: t('contentSearch.links'), items: mapLinksItems(props.links) })
  }

  if (props.navigation?.length) {
    if (props.navigation.some(link => !!link.children?.length)) {
      groups.push(...props.navigation.map(group => ({ id: group.path, label: group.title, items: mapNavigationItems(group.children || []), postFilter })))
    } else {
      groups.push({ id: 'docs', items: mapNavigationItems(props.navigation), postFilter })
    }
  }

  groups.push(...(props.groups || []))

  if (props.colorMode && !colorMode?.forced) {
    groups.push({
      id: 'theme',
      label: t('contentSearch.theme'),
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

function postFilter(query: string, items: ContentSearchItem[]) {
  // Filter only first level items if no query
  if (!query) {
    return items?.filter(item => item.level === 1)
  }

  return items
}

function onSelect(item: ContentSearchItem) {
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
