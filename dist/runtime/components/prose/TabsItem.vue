<script>
import theme from "#build/ui-pro/prose/tabs-item";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  label: { type: String, required: true },
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.tabsItem || {} }));
</script>

<template>
  <div :class="ui({ class: props.class })">
    <slot mdc-unwrap="p" />
  </div>
</template>
