<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/page-list'
import { tv } from '../utils/tv'

const appConfigPageList = _appConfig as AppConfig & { uiPro: { pageList: Partial<typeof theme> } }

const pageList = tv({ extend: tv(theme), ...(appConfigPageList.uiPro?.pageList || {}) })

export interface PageListProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  divide?: boolean
  class?: any
}

export interface PageListSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<PageListProps>(), {
  divide: false
})
defineSlots<PageListSlots>()
</script>

<template>
  <Primitive :as="as" role="list" :class="pageList({ class: props.class, divide: props.divide })">
    <slot />
  </Primitive>
</template>
