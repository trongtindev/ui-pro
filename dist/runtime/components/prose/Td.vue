<script>
import theme from "#build/ui-pro/prose/td";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.td || {} }));
</script>

<template>
  <td :class="ui({ class: props.class })">
    <slot />
  </td>
</template>
