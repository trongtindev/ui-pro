<script>
import theme from "#build/ui-pro/dashboard-group";
</script>

<script setup>
import { ref, computed } from "vue";
import { Primitive } from "reka-ui";
import { useNuxtApp, useAppConfig } from "#imports";
import { provideDashboardContext } from "../utils/dashboard";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  class: { type: null, required: false },
  storage: { type: String, required: false, default: "cookie" },
  storageKey: { type: String, required: false, default: "dashboard" },
  persistent: { type: Boolean, required: false, default: true },
  unit: { type: String, required: false, default: "%" }
});
defineSlots();
const nuxtApp = useNuxtApp();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.dashboardGroup || {} }));
const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);
provideDashboardContext({
  storage: props.storage,
  storageKey: props.storageKey,
  persistent: props.persistent,
  unit: props.unit,
  sidebarOpen,
  toggleSidebar: () => {
    nuxtApp.hooks.callHook("dashboard:sidebar:toggle");
  },
  sidebarCollapsed,
  collapseSidebar: (collapsed) => {
    nuxtApp.hooks.callHook("dashboard:sidebar:collapse", collapsed);
  },
  toggleSearch: () => {
    nuxtApp.hooks.callHook("dashboard:search:toggle");
  }
});
</script>

<template>
  <Primitive :as="as" :class="ui({ class: props.class })">
    <slot />
  </Primitive>
</template>
