<script lang="ts">
import type { VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/blog-posts'
import { tv } from '../utils/tv'
import type { BlogPostProps } from '../types'

const appConfigBlogPosts = _appConfig as AppConfig & { uiPro: { blogPosts: Partial<typeof theme> } }

const blogPosts = tv({ extend: tv(theme), ...(appConfigBlogPosts.uiPro?.blogPosts || {}) })

type BlogPostsVariants = VariantProps<typeof blogPosts>

export interface BlogPostsProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  posts?: BlogPostProps[]
  /**
   * The orientation of the blog posts.
   * @defaultValue 'horizontal'
   */
  orientation?: BlogPostsVariants['orientation']
  class?: any
}

export interface BlogPostsSlots {
  default(props?: {}): any
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import UBlogPost from './BlogPost.vue'

const props = withDefaults(defineProps<BlogPostsProps>(), {
  orientation: 'horizontal'
})
defineSlots<BlogPostsSlots>()
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="blogPosts({ orientation, class: props.class })">
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
