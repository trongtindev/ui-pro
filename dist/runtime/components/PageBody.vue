<script>
import theme from "#build/ui-pro/page-body";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageBody || {} }));
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
