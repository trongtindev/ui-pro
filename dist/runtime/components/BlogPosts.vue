<script>
import theme from "#build/ui-pro/blog-posts";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
import UBlogPost from "./BlogPost.vue";
const props = defineProps({
  as: { type: null, required: false },
  posts: { type: Array, required: false },
  orientation: { type: null, required: false, default: "horizontal" },
  class: { type: null, required: false }
});
defineSlots();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.blogPosts || {} }));
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui({ orientation, class: props.class })">
    <slot>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        :orientation="orientation === 'vertical' ? 'horizontal' : 'vertical'"
        v-bind="post"
      />
    </slot>
  </Primitive>
</template>
