<script>
import theme from "#build/ui-pro/content/content-surround";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { createReusableTemplate } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { tv } from "../../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  prevIcon: { type: String, required: false },
  nextIcon: { type: String, required: false },
  surround: { type: Array, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate({
  props: {
    link: Object,
    icon: String,
    direction: String
  }
});
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.contentSurround || {} })());
</script>

<template>
  <DefineLinkTemplate v-slot="{ link, icon, direction }">
    <ULink v-if="link" :to="link.path" raw :class="ui.link({ class: [props.ui?.link, link.class], direction })">
      <slot name="link" :link="link">
        <div :class="ui.linkLeading({ class: props.ui?.linkLeading })">
          <slot name="link-leading" :link="link">
            <UIcon :name="link.icon || icon" :class="ui.linkLeadingIcon({ class: props.ui?.linkLeadingIcon, direction })" />
          </slot>
        </div>

        <p :class="ui.linkTitle({ class: props.ui?.linkTitle })">
          <slot name="link-title" :link="link">
            {{ link.title }}
          </slot>
        </p>

        <p :class="ui.linkDescription({ class: props.ui?.linkDescription })">
          <slot name="link-description" :link="link">
            {{ link.description }}
          </slot>
        </p>
      </slot>
    </ULink>
    <span v-else class="hidden lg:block">&nbsp;</span>
  </DefineLinkTemplate>

  <Primitive v-if="surround" :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <ReuseLinkTemplate :link="surround[0]" :icon="prevIcon || appConfig.ui.icons.arrowLeft" direction="left" />
    <ReuseLinkTemplate :link="surround[1]" :icon="nextIcon || appConfig.ui.icons.arrowRight" direction="right" />
  </Primitive>
</template>
