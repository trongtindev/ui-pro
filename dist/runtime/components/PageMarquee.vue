<script>
import theme from "#build/ui-pro/page-marquee";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  pauseOnHover: { type: Boolean, required: false },
  reverse: { type: Boolean, required: false },
  orientation: { type: null, required: false, default: "horizontal" },
  repeat: { type: Number, required: false, default: 4 },
  overlay: { type: Boolean, required: false, default: true },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageMarquee || {} })({
  pauseOnHover: props.pauseOnHover,
  orientation: props.orientation,
  reverse: props.reverse,
  overlay: props.overlay
}));
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
