<script lang="ts">
import type { VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/page-marquee'
import { tv } from '../utils/tv'

const appConfigPageMarquee = _appConfig as AppConfig & { uiPro: { pageMarquee: Partial<typeof theme> } }

const pageMarquee = tv({ extend: tv(theme), ...(appConfigPageMarquee.uiPro?.pageMarquee || {}) })

type PageMarqueeVariants = VariantProps<typeof pageMarquee>

export interface PageMarqueeProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  pauseOnHover?: boolean
  reverse?: boolean
  orientation?: PageMarqueeVariants['orientation']
  repeat?: number
  overlay?: boolean
  class?: any
  ui?: Partial<typeof pageMarquee.slots>
}

export interface PageMarqueeSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(defineProps<PageMarqueeProps>(), {
  orientation: 'horizontal',
  repeat: 4,
  overlay: true
})

const ui = computed(() => pageMarquee({
  pauseOnHover: props.pauseOnHover,
  orientation: props.orientation,
  reverse: props.reverse,
  overlay: props.overlay
}))
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <div v-for="i in repeat" :key="i" :class="ui.content({ class: [props.ui?.content] })">
      <slot />
    </div>
  </Primitive>
</template>

<style>
@keyframes marquee{0%{transform:translateZ(0);will-change:transform}to{transform:translate3d(calc(-100% - var(--gap)),0,0);will-change:transform}}@keyframes marquee-rtl{0%{transform:translate3d(100%,0,0);will-change:transform}to{transform:translate3d(calc(-100%*var(--repeat) - var(--gap)*var(--repeat)),0,0);will-change:transform}}@keyframes marquee-vertical{0%{transform:translateZ(0);will-change:transform}to{transform:translate3d(0,calc(-100% - var(--gap)),0);will-change:transform}}@keyframes marquee-vertical-rtl{0%{transform:translate3d(0,100%,0);will-change:transform}to{transform:translate3d(0,calc(-100%*var(--repeat) - var(--gap)*var(--repeat)),0);will-change:transform}}
</style>
