<script lang="ts">
import type { VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@nuxt/schema'
import type { BadgeProps, LinkProps } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/blog-post'
import { tv } from '../utils/tv'
import type { UserProps } from '../types'

const appConfigBlogPost = _appConfig as AppConfig & { uiPro: { blogPost: Partial<typeof theme> } }

const blogPost = tv({ extend: tv(theme), ...(appConfigBlogPost.uiPro?.blogPost || {}) })

type BlogPostVariants = VariantProps<typeof blogPost>

export interface BlogPostProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'article'
   */
  as?: any
  title?: string
  description?: string
  /** The date of the blog post. Can be a string or a Date object. */
  date?: string | Date
  /**
   * Display a badge on the blog post.
   * Can be a string or an object.
   * `{ color: 'neutral', variant: 'subtle' }`{lang="ts-type"}
   */
  badge?: string | BadgeProps
  /** The authors of the blog post. */
  authors?: UserProps[]
  /** The image of the blog post. Can be a string or an object. */
  image?: string | Partial<HTMLImageElement>
  /**
   * The orientation of the blog post.
   * @defaultValue 'vertical'
   */
  orientation?: BlogPostVariants['orientation']
  /**
   * @defaultValue 'outline'
   */
  variant?: BlogPostVariants['variant']
  to?: LinkProps['to']
  target?: LinkProps['target']
  onClick?: (event: MouseEvent) => void | Promise<void>
  class?: any
  ui?: Partial<typeof blogPost.slots>
}

export interface BlogPostSlots {
  date(props?: {}): any
  badge(props?: {}): any
  title(props?: {}): any
  description(props?: {}): any
  authors(props?: {}): any
  header(props?: {}): any
  body(props?: {}): any
  footer(props?: {}): any
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, useDateFormatter } from 'reka-ui'
import ImageComponent from '#build/ui-image-component'
import { useLocale } from '#imports'
import { getSlotChildrenText } from '../utils'
import UUser from './User.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<BlogPostProps>(), {
  as: 'article',
  orientation: 'vertical'
})
const slots = defineSlots<BlogPostSlots>()

const ui = computed(() => blogPost({
  orientation: props.orientation,
  variant: props.variant,
  image: !!props.image,
  to: !!props.to || !!props.onClick
}))

const { locale } = useLocale()
const formatter = useDateFormatter(locale.value.code)

const date = computed(() => {
  if (!props.date) {
    return
  }

  try {
    return formatter.custom(new Date(props.date), { dateStyle: 'medium' })
  } catch {
    return props.date
  }
})
const datetime = computed(() => {
  if (!props.date) {
    return
  }

  try {
    return new Date(props.date)?.toISOString()
  } catch {
    return undefined
  }
})
const ariaLabel = computed(() => (props.title || (slots.title && getSlotChildrenText(slots.title())) || 'Post link').trim())
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
        <div v-if="(date || !!slots.date) || (badge || !!slots.badge)" :class="ui.meta({ class: props.ui?.meta })">
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
