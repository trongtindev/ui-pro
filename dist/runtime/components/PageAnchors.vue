<script>
import theme from "#build/ui-pro/page-anchors";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { pickLinkProps } from "@nuxt/ui/utils/link";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false, default: "nav" },
  links: { type: Array, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pageAnchors || {} })());
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <ul :class="ui.list({ class: props.ui?.list })">
      <li v-for="(link, index) in links" :key="index" :class="ui.item({ class: props.ui?.item })">
        <ULink v-slot="{ active, ...slotProps }" v-bind="pickLinkProps(link)" custom>
          <ULinkBase v-bind="slotProps" :class="ui.link({ class: [props.ui?.link, link.class], active })">
            <slot name="link" :link="link" :active="active">
              <div v-if="link.icon || !!slots['link-leading']" :class="ui.linkLeading({ class: props.ui?.linkLeading, active })">
                <slot name="link-leading" :link="link" :active="active">
                  <UIcon v-if="link.icon" :name="link.icon" :class="ui.linkLeadingIcon({ class: props.ui?.linkLeadingIcon, active })" />
                </slot>
              </div>

              <span v-if="link.label || !!slots['link-label']" :class="ui.linkLabel({ class: props.ui?.linkLabel, active })">
                <slot name="link-label" :link="link" :active="active">
                  {{ link.label }}
                </slot>

                <UIcon v-if="link.target === '_blank'" :name="appConfig.ui.icons.external" :class="ui.linkLabelExternalIcon({ class: props.ui?.linkLabelExternalIcon, active })" />
              </span>

              <slot name="link-trailing" :link="link" :active="active" />
            </slot>
          </ULinkBase>
        </ULink>
      </li>
    </ul>
  </Primitive>
</template>
