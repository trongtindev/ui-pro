<script>
import theme from "#build/ui-pro/prose/table";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.table || {} })());
</script>

<template>
  <div :class="ui.root({ class: [props.class, props.ui?.root] })">
    <table :class="ui.base({ class: props.ui?.base })">
      <slot />
    </table>
  </div>
</template>
