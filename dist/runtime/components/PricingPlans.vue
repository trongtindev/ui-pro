<script>
import theme from "#build/ui-pro/pricing-plans";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  plans: { type: Array, required: false },
  orientation: { type: null, required: false, default: "horizontal" },
  compact: { type: Boolean, required: false, default: false },
  scale: { type: Boolean, required: false, default: false },
  class: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pricingPlans || {} }));
const count = computed(() => props.plans?.length || slots.default?.()?.flatMap(mapSlot).filter(Boolean)?.length || 3);
function mapSlot(slot) {
  if (typeof slot.type === "symbol") {
    if (slot.children && Array.isArray(slot.children)) {
      return slot.children.map(mapSlot);
    }
    return;
  }
  return slot;
}
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui({ class: props.class, compact, scale, orientation })" :style="{ '--count': count }">
    <slot>
      <UPricingPlan
        v-for="(plan, index) in plans"
        :key="index"
        :orientation="orientation === 'vertical' ? 'horizontal' : 'vertical'"
        v-bind="plan"
      />
    </slot>
  </Primitive>
</template>
