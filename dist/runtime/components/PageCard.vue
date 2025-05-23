<script>
import theme from "#build/ui-pro/page-card";
</script>

<script setup>
import { computed, ref, watch } from "vue";
import { Primitive } from "reka-ui";
import { useMouseInElement, pausableFilter } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { getSlotChildrenText } from "../utils";
import { tv } from "../utils/tv";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  as: { type: null, required: false },
  icon: { type: String, required: false },
  title: { type: String, required: false },
  description: { type: String, required: false },
  orientation: { type: null, required: false, default: "vertical" },
  reverse: { type: Boolean, required: false },
  highlight: { type: Boolean, required: false },
  highlightColor: { type: null, required: false },
  spotlight: { type: Boolean, required: false },
  spotlightColor: { type: null, required: false },
  variant: { type: null, required: false },
  to: { type: null, required: false },
  target: { type: null, required: false },
  onClick: { type: Function, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const cardRef = ref();
const motionControl = pausableFilter();
const appConfig = useAppConfig();
const { elementX, elementY } = useMouseInElement(cardRef, {
  eventFilter: motionControl.eventFilter
});
const spotlight = computed(() => props.spotlight && (elementX.value > 0 || elementY.value > 0));
watch(() => props.spotlight, (value) => {
  if (value) {
    motionControl.resume();
  } else {
    motionControl.pause();
  }
}, { immediate: true });
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageCard || {} })({
  orientation: props.orientation,
  reverse: props.reverse,
  variant: props.variant,
  to: !!props.to || !!props.onClick,
  title: !!props.title || !!slots.title,
  highlight: props.highlight,
  highlightColor: props.highlightColor,
  spotlight: spotlight.value,
  spotlightColor: props.spotlightColor
}));
const ariaLabel = computed(() => {
  const slotText = slots.title && getSlotChildrenText(slots.title());
  return (slotText || props.title || "Card link").trim();
});
</script>

<template>
  <Primitive
    ref="cardRef"
    :as="as"
    :data-orientation="orientation"
    :class="ui.root({ class: [props.class, props.ui?.root] })"
    :style="spotlight && { '--spotlight-x': `${elementX}px`, '--spotlight-y': `${elementY}px` }"
    @click="onClick"
  >
    <div v-if="props.spotlight" :class="ui.spotlight({ class: props.ui?.spotlight })" />

    <div :class="ui.container({ class: props.ui?.container })">
      <div v-if="!!slots.header || !!slots.body || (icon || !!slots.leading) || (title || !!slots.title) || (description || !!slots.description) || !!slots.footer" :class="ui.wrapper({ class: props.ui?.wrapper })">
        <div v-if="!!slots.header" :class="ui.header({ class: props.ui?.header })">
          <slot name="header" />
        </div>

        <div v-if="icon || !!slots.leading" :class="ui.leading({ class: props.ui?.leading })">
          <slot name="leading">
            <UIcon v-if="icon" :name="icon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
          </slot>
        </div>

        <div v-if="!!slots.body || (title || !!slots.title) || (description || !!slots.description)" :class="ui.body({ class: props.ui?.body })">
          <slot name="body">
            <div v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
              <slot name="title">
                {{ title }}
              </slot>
            </div>

            <div v-if="description || !!slots.description" :class="ui.description({ class: props.ui?.description })">
              <slot name="description">
                {{ description }}
              </slot>
            </div>
          </slot>
        </div>

        <div v-if="!!slots.footer" :class="ui.footer({ class: props.ui?.footer })">
          <slot name="footer" />
        </div>
      </div>

      <slot />
    </div>

    <ULink
      v-if="to"
      :aria-label="ariaLabel"
      v-bind="{ to, target, ...$attrs }"
      class="focus:outline-none peer"
      tabindex="-1"
      raw
    >
      <span class="absolute inset-0" aria-hidden="true" />
    </ULink>
  </Primitive>
</template>
