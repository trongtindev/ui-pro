<script>
import theme from "#build/ui-pro/prose/code-tree";
</script>

<script setup>
import { computed, ref, watch, onBeforeUpdate } from "vue";
import { TreeRoot, TreeItem } from "reka-ui";
import { createReusableTemplate } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
import CodeIcon from "./CodeIcon.vue";
const props = defineProps({
  defaultValue: { type: String, required: false },
  expandAll: { type: Boolean, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const [DefineTreeTemplate, ReuseTreeTemplate] = createReusableTemplate();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.prose?.codeTree || {} })());
const model = ref(props.defaultValue ? { path: props.defaultValue } : void 0);
const lastSelectedItem = ref();
const rerenderCount = ref(1);
const flatItems = computed(() => {
  rerenderCount.value;
  return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || [];
});
const items = computed(() => buildTree(flatItems.value));
function buildTree(items2) {
  const map = /* @__PURE__ */ new Map();
  const root = [];
  items2.forEach((item) => {
    const parts = item.label.split("/");
    let path = "";
    parts.forEach((part, i) => {
      path = path ? `${path}/${part}` : part;
      if (!map.has(path)) {
        const node = { label: part, path, ...i < parts.length - 1 && { children: [] } };
        map.set(path, node);
        if (i === 0) {
          root.push(node);
        } else {
          map.get(parts.slice(0, i).join("/"))?.children?.push(node);
        }
      }
    });
  });
  const sort = (nodes) => nodes.sort(
    (a, b) => !!a.children === !!b.children ? a.label.localeCompare(b.label) : b.children ? 1 : -1
  ).map((n) => ({ ...n, children: n.children && sort(n.children) }));
  return sort(root);
}
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
const expanded = computed(() => {
  if (props.expandAll) {
    const allPaths = /* @__PURE__ */ new Set();
    flatItems.value.forEach((item) => {
      const parts2 = item.label.split("/");
      for (let i = 1; i < parts2.length; i++) {
        allPaths.add(parts2.slice(0, i).join("/"));
      }
    });
    return Array.from(allPaths);
  }
  const path = model.value?.path;
  if (!path) {
    return [];
  }
  const parts = path.split("/");
  return parts.map((_, index) => parts.slice(0, index + 1).join("/"));
});
watch(model, (value) => {
  const item = flatItems.value.find((item2) => value?.path === item2.label);
  if (item?.component) {
    lastSelectedItem.value = item;
  }
}, { immediate: true });
onBeforeUpdate(() => rerenderCount.value++);
</script>

<template>
  <DefineTreeTemplate v-slot="{ items, level }">
    <li
      v-for="(item, index) in items"
      :key="`${level}-${index}`"
      :class="level > 0 ? ui.itemWithChildren({ class: props.ui?.itemWithChildren }) : ui.item({ class: props.ui?.item })"
    >
      <TreeItem
        v-slot="{ isExpanded, isSelected }"
        as-child
        :level="level"
        :value="item"
      >
        <button :class="ui.link({ class: props.ui?.link, active: isSelected })">
          <UIcon
            v-if="item.children?.length"
            :name="isExpanded ? appConfig.ui.icons.folderOpen : appConfig.ui.icons.folder"
            :class="ui.linkLeadingIcon({ class: props.ui?.linkLeadingIcon })"
          />
          <CodeIcon
            v-else
            :filename="item.label"
            :class="ui.linkLeadingIcon({ class: props.ui?.linkLeadingIcon })"
          />

          <span :class="ui.linkLabel({ class: props.ui?.linkLabel })">
            {{ item.label }}
          </span>

          <span v-if="item.children?.length" :class="ui.linkTrailing({ class: props.ui?.linkTrailing })">
            <UIcon :name="appConfig.ui.icons.chevronDown" :class="ui.linkTrailingIcon({ class: props.ui?.linkTrailingIcon })" />
          </span>
        </button>

        <ul v-if="item.children?.length && isExpanded" :class="ui.listWithChildren({ class: props.ui?.listWithChildren })">
          <ReuseTreeTemplate :items="item.children" :level="level + 1" />
        </ul>
      </TreeItem>
    </li>
  </DefineTreeTemplate>

  <div :class="ui.root({ class: [props.class, props.ui?.root] })">
    <TreeRoot
      v-model="model"
      :class="ui.list({ class: props.ui?.list })"
      :items="items"
      :get-key="(item2) => item2.path"
      :default-expanded="expanded"
    >
      <ReuseTreeTemplate :items="items" :level="0" />
    </TreeRoot>

    <div :class="ui.content({ class: props.ui?.content })">
      <component :is="lastSelectedItem?.component" />
    </div>
  </div>
</template>
