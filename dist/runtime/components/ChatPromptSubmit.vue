<script>
import theme from "#build/ui-pro/chat-prompt-submit";
</script>

<script setup>
import { computed } from "vue";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { transformUI } from "../utils";
import { tv } from "../utils/tv";
const props = defineProps({
  status: { type: null, required: false, default: "ready" },
  icon: { type: String, required: false },
  color: { type: null, required: false },
  variant: { type: null, required: false },
  streamingIcon: { type: String, required: false },
  streamingColor: { type: null, required: false, default: "neutral" },
  streamingVariant: { type: null, required: false, default: "subtle" },
  submittedIcon: { type: String, required: false },
  submittedColor: { type: null, required: false, default: "neutral" },
  submittedVariant: { type: null, required: false, default: "subtle" },
  errorIcon: { type: String, required: false },
  errorColor: { type: null, required: false, default: "error" },
  errorVariant: { type: null, required: false, default: "soft" },
  ui: { type: void 0, required: false },
  class: { type: null, required: false }
});
const emits = defineEmits(["stop", "reload"]);
const slots = defineSlots();
const { t } = useLocalePro();
const appConfig = useAppConfig();
const buttonProps = computed(() => ({
  ready: {
    icon: props.icon || appConfig.ui.icons.arrowUp,
    color: props.color,
    variant: props.variant,
    type: "submit"
  },
  submitted: {
    icon: props.submittedIcon || appConfig.ui.icons.stop,
    color: props.submittedColor,
    variant: props.submittedVariant,
    onClick() {
      emits("stop");
    }
  },
  streaming: {
    icon: props.streamingIcon || appConfig.ui.icons.stop,
    color: props.streamingColor,
    variant: props.streamingVariant,
    onClick() {
      emits("stop");
    }
  },
  error: {
    icon: props.errorIcon || appConfig.ui.icons.reload,
    color: props.errorColor,
    variant: props.errorVariant,
    onClick() {
      emits("reload");
    }
  }
})[props.status]);
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.chatPromptSubmit || {} })());
</script>

<template>
  <UButton
    :aria-label="t('chatPromptSubmit.label')"
    v-bind="buttonProps"
    :class="ui.base({ class: [props.class, props.ui?.base] })"
    :ui="transformUI(ui, props.ui)"
  >
    <template v-for="(_, name) in slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </UButton>
</template>
