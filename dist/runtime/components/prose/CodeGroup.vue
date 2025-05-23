<script>
import theme from "#build/ui-pro/prose/code-group";
</script>

<script setup>
import { computed, watch, onMounted, ref, onBeforeUpdate } from "vue";
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from "reka-ui";
import { useState, useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
import CodeIcon from "./CodeIcon.vue";
const props = defineProps({
  defaultValue: { type: String, required: false, default: "0" },
  sync: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const model = defineModel({ type: String });
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.codeGroup || {} })());
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
    label: slot.props?.filename || slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot
  };
}
onMounted(() => {
  if (props.sync) {
    const syncKey = `code-group-${props.sync}`;
    const syncValue = useState(syncKey, () => localStorage.getItem(syncKey));
    watch(syncValue, () => {
      if (!syncValue.value) return;
      model.value = syncValue.value;
    }, { immediate: true });
    watch(model, () => {
      if (!model.value) return;
      syncValue.value = model.value;
      localStorage.setItem(syncKey, model.value);
    });
  }
});
onBeforeUpdate(() => rerenderCount.value++);
</script>

<template>
  <TabsRoot v-model="model" :default-value="defaultValue" :unmount-on-hide="false" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <TabsList :class="ui.list({ class: props.ui?.list })">
      <TabsIndicator :class="ui.indicator({ class: props.ui?.indicator })" />

      <TabsTrigger v-for="(item, index) of items" :key="index" :value="String(index)" :class="ui.trigger({ class: props.ui?.trigger })">
        <CodeIcon :icon="item.icon" :filename="item.label" :class="ui.triggerIcon({ class: props.ui?.triggerIcon })" />

        <span :class="ui.triggerLabel({ class: props.ui?.triggerLabel })">{{ item.label }}</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent v-for="(item, index) of items" :key="index" :value="String(index)" as-child>
      <component :is="item.component" hide-header tabindex="-1" />
    </TabsContent>
  </TabsRoot>
</template>
