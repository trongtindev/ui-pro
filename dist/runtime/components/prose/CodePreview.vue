<script>
import theme from "#build/ui-pro/prose/code-preview";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.codePreview || {} })({ code: !!slots.code }));
</script>

<template>
  <div :class="ui.root({ class: [props.class, props.ui?.root] })">
    <div :class="ui.preview({ class: [props.ui?.preview] })">
      <slot />
    </div>

    <div v-if="!!slots.code" :class="ui.code({ class: [props.ui?.code] })">
      <slot name="code" />
    </div>
  </div>
</template>
