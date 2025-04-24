<script>
import theme from "#build/ui-pro/prose/card";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  to: { type: null, required: false },
  target: { type: null, required: false },
  icon: { type: String, required: false },
  title: { type: String, required: false },
  color: { type: null, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.card || {} })({
  color: props.color,
  to: !!props.to,
  title: !!props.title
}));
const target = computed(() => props.target || (!!props.to && typeof props.to === "string" && props.to.startsWith("http") ? "_blank" : void 0));
const ariaLabel = computed(() => (props.title || "Card link").trim());
</script>

<template>
  <div :class="ui.base({ class: props.class })">
    <ULink
      v-if="to"
      :aria-label="ariaLabel"
      v-bind="{ to, target, ...$attrs }"
      class="focus:outline-none"
      tabindex="-1"
      raw
    >
      <span class="absolute inset-0" aria-hidden="true" />
    </ULink>

    <UIcon v-if="icon" :name="icon" :class="ui.icon({ class: props.ui?.icon })" />
    <UIcon v-if="!!to && target === '_blank'" :name="appConfig.ui.icons.external" :class="ui.externalIcon({ class: props.ui?.externalIcon })" />

    <p :class="ui.title({ class: props.ui?.title })">
      {{ title }}
    </p>

    <p v-if="!!slots.default" :class="ui.description({ class: props.ui?.description })">
      <slot mdc-unwrap="p" />
    </p>
  </div>
</template>
