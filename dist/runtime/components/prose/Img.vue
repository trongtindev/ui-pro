<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/prose/img'
import { tv } from '../../utils/tv'

const appConfigProseImg = _appConfig as AppConfig & { uiPro: { prose: { img: Partial<typeof theme> } } }

const proseImg = tv({ extend: tv(theme), ...(appConfigProseImg.uiPro?.prose?.img || {}) })
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig } from '#imports'
import ImageComponent from '#build/ui-image-component'

const props = defineProps<{
  src: string
  alt: string
  width?: string | number
  height?: string | number
  class?: any
}>()

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>

<template>
  <component
    :is="ImageComponent"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height"
    :class="proseImg({ class: props.class })"
  />
</template>
