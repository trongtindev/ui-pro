<script lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { AppConfig } from '@nuxt/schema'
import type { PartialString } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/content/content-surround'
import { tv } from '../../utils/tv'

const appConfigContentSurround = _appConfig as AppConfig & { uiPro: { contentSurround: Partial<typeof theme> } }

const contentSurround = tv({ extend: tv(theme), ...(appConfigContentSurround.uiPro?.contentSurround || {}) })

export interface ContentSurroundLink extends ContentNavigationItem {
  description?: string
  /**
   * @IconifyIcon
   */
  icon?: string
  class?: any
}

export interface ContentSurroundProps<T> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * The icon displayed in the prev link.
   * @defaultValue appConfig.ui.icons.arrowLeft
   * @IconifyIcon
   */
  prevIcon?: string
  /**
   * The icon displayed in the next link.
   * @defaultValue appConfig.ui.icons.arrowRight
   * @IconifyIcon
   */
  nextIcon?: string
  surround?: T[]
  class?: any
  ui?: PartialString<typeof contentSurround.slots>
}

type SlotProps<T> = (props: { link: T }) => any

export interface ContentSurroundSlots<T> {
  'link': SlotProps<T>
  'link-leading': SlotProps<T>
  'link-title': SlotProps<T>
  'link-description': SlotProps<T>
}
</script>

<script setup lang="ts" generic="T extends ContentSurroundLink">
import type { PropType } from 'vue'
import { Primitive } from 'reka-ui'
import { createReusableTemplate } from '@vueuse/core'
import { useAppConfig } from '#imports'

const props = defineProps<ContentSurroundProps<T>>()
defineSlots<ContentSurroundSlots<T>>()

const appConfig = useAppConfig()
const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate<{ link?: ContentSurroundLink, icon: string, direction: 'left' | 'right' }>({
  props: {
    link: Object,
    icon: String,
    direction: String as PropType<'left' | 'right'>
  }
})

// eslint-disable-next-line vue/no-dupe-keys
const ui = contentSurround()
</script>

<template>
  <DefineLinkTemplate v-slot="{ link, icon, direction }">
    <ULink v-if="link" :to="link.path" raw :class="ui.link({ class: [props.ui?.link, link.class], direction })">
      <slot name="link" :link="(link as T)">
        <div :class="ui.linkLeading({ class: props.ui?.linkLeading })">
          <slot name="link-leading" :link="(link as T)">
            <UIcon :name="link.icon || icon" :class="ui.linkLeadingIcon({ class: props.ui?.linkLeadingIcon, direction })" />
          </slot>
        </div>

        <p :class="ui.linkTitle({ class: props.ui?.linkTitle })">
          <slot name="link-title" :link="(link as T)">
            {{ link.title }}
          </slot>
        </p>

        <p :class="ui.linkDescription({ class: props.ui?.linkDescription })">
          <slot name="link-description" :link="(link as T)">
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
