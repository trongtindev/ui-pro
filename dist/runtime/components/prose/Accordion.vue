<script>
import theme from "#build/ui-pro/prose/accordion";
</script>

<script setup>
import { computed, ref, onBeforeUpdate } from "vue";
import { useAppConfig } from "#imports";
import { transformUI } from "../../utils";
import { tv } from "../../utils/tv";
const props = defineProps({
  type: { type: String, required: false, default: "multiple" },
  class: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.accordion || {} }));
const rerenderCount = ref(1);
const items = computed(() => {
  rerenderCount.value;
  return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
});
function transformSlot(slot, index) {
  if (typeof slot.type === "symbol") {
    return slot.children?.map(transformSlot);
  }
  return {
    index,
    label: slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot
  };
}
onBeforeUpdate(() => rerenderCount.value++);
</script>

<template>
  <UAccordion :type="type" :items="items" :unmount-on-hide="false" :class="props.class" :ui="transformUI(ui())">
    <template #content="{ item }">
      <component :is="item.component" />
    </template>
  </UAccordion>
</template>
