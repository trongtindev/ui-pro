<script>
import theme from "#build/ui-pro/prose/th";
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
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.th || {} }));
</script>

<template>
  <th :class="ui({ class: props.class })">
    <slot />
  </th>
</template>
