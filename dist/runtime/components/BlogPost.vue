<script>
import theme from "#build/ui-pro/blog-post";
</script>

<script setup>
import { computed } from "vue";
import { Primitive, useDateFormatter } from "reka-ui";
import ImageComponent from "#build/ui-image-component";
import { useLocale, useAppConfig } from "#imports";
import { getSlotChildrenText } from "../utils";
import { tv } from "../utils/tv";
import UUser from "./User.vue";
defineOptions({ inheritAttrs: false });
const props = defineProps({
  as: { type: null, required: false, default: "article" },
  title: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: [String, Date], required: false },
  badge: { type: null, required: false },
  authors: { type: Array, required: false },
  image: { type: [String, Object], required: false },
  orientation: { type: null, required: false, default: "vertical" },
  variant: { type: null, required: false },
  to: { type: null, required: false },
  target: { type: null, required: false },
  onClick: { type: Function, required: false },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const { locale } = useLocale();
const appConfig = useAppConfig();
const formatter = useDateFormatter(locale.value.code);
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.blogPost || {} })({
  orientation: props.orientation,
  variant: props.variant,
  image: !!props.image,
  to: !!props.to || !!props.onClick
}));
const date = computed(() => {
  if (!props.date) {
    return;
  }
  try {
    return formatter.custom(new Date(props.date), { dateStyle: "medium" });
  } catch {
    return props.date;
  }
});
const datetime = computed(() => {
  if (!props.date) {
    return;
  }
  try {
    return new Date(props.date)?.toISOString();
  } catch {
    return void 0;
  }
});
const ariaLabel = computed(() => {
  const slotText = slots.title && getSlotChildrenText(slots.title());
  return (slotText || props.title || "Post link").trim();
});
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui.root({ class: [props.class, props.ui?.root] })" @click="onClick">
    <div v-if="image || !!slots.header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header">
        <component
          :is="ImageComponent"
          v-bind="typeof image === 'string' ? { src: image, alt: title } : { alt: title, ...image }"
          :class="ui.image({ class: props.ui?.image, to: !!to })"
        />
      </slot>
    </div>

    <div :class="ui.body({ class: props.ui?.body })">
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

      <slot name="body">
        <div v-if="date || !!slots.date || (badge || !!slots.badge)" :class="ui.meta({ class: props.ui?.meta })">
          <slot name="badge">
            <UBadge v-if="badge" color="neutral" variant="subtle" v-bind="typeof badge === 'string' ? { label: badge } : badge" :class="ui.badge({ class: props.ui?.badge })" />
          </slot>

          <slot name="date">
            <time v-if="date" :datetime="datetime" :class="ui.date({ class: props.ui?.date })">
              {{ date }}
            </time>
          </slot>
        </div>

        <h2 v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </h2>

        <div v-if="description || !!slots.description" :class="ui.description({ class: props.ui?.description })">
          <slot name="description">
            {{ description }}
          </slot>
        </div>

        <div v-if="authors?.length || !!slots.authors" :class="ui.authors({ class: props.ui?.authors })">
          <slot name="authors">
            <template v-if="authors?.length">
              <UAvatarGroup v-if="authors.length > 1">
                <ULink
                  v-for="(author, index) in authors"
                  :key="index"
                  :to="author.to"
                  :target="author.target"
                  :class="ui.avatar({ class: props.ui?.avatar, to: !!author.to })"
                  raw
                >
                  <UAvatar v-bind="author.avatar" />
                </ULink>
              </UAvatarGroup>
              <UUser v-else v-bind="authors[0]" />
            </template>
          </slot>
        </div>
      </slot>
    </div>

    <div v-if="!!slots.footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
