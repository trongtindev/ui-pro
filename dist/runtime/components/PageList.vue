<script>
import theme from "#build/ui-pro/page-list";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  divide: { type: Boolean, required: false, default: false },
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageList || {} }));
</script>

<template>
  <Primitive :as="as" role="list" :class="ui({ class: props.class, divide: props.divide })">
    <slot />
  </Primitive>
</template>
