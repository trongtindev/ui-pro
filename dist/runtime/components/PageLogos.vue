<script>
import theme from "#build/ui-pro/page-logos";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { createReusableTemplate } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
const props = defineProps({
  as: { type: null, required: false },
  title: { type: String, required: false },
  items: { type: Array, required: false },
  marquee: { type: [Boolean, Object], required: false, default: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageLogos || {} })());
</script>

<template>
  <DefineCreateItemTemplate>
    <slot v-if="!!slots.default" />
    <template v-else-if="items?.length">
      <template v-for="(item, index) in items" :key="index">
        <UAvatar
          v-if="typeof item === 'object'"
          :src="item.src"
          :alt="item.alt"
          :class="ui.logo({ class: props.ui?.logo })"
        />
        <UIcon
          v-else
          :name="item"
          :class="ui.logo({ class: props.ui?.logo })"
        />
      </template>
    </template>
  </DefineCreateItemTemplate>

  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <h2 v-if="title" :class="ui.title({ class: props.ui?.title })">
      {{ title }}
    </h2>

    <UPageMarquee
      v-if="marquee"
      v-bind="typeof marquee === 'object' ? marquee : {}"
      :class="ui.logos({ class: props.ui?.logos, marquee: true })"
    >
      <ReuseCreateItemTemplate :items="items" />
    </UPageMarquee>
    <div v-else :class="ui.logos({ class: props.ui?.logos })">
      <ReuseCreateItemTemplate :items="items" />
    </div>
  </Primitive>
</template>
