<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/prose/h3'
import { tv } from '../../utils/tv'

const appConfigProseH3 = _appConfig as AppConfig & { uiPro: { prose: { h3: Partial<typeof theme> } } }

const proseH3 = tv({ extend: tv(theme), ...(appConfigProseH3.uiPro?.prose?.h3 || {}) })
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useRuntimeConfig, useAppConfig } from '#imports'

const props = defineProps<{
  id?: string
  class?: any
  ui?: Partial<typeof proseH3.slots>
}>()

// eslint-disable-next-line vue/no-dupe-keys
const ui = proseH3()

const appConfig = useAppConfig()
const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && typeof headings?.anchorLinks === 'object' && headings.anchorLinks.h3)
</script>

<template>
  <h3 :id="id" :class="ui.base({ class: props.class })">
    <a v-if="id && generate" :href="`#${id}`" :class="ui.link({ class: props.ui?.link })">
      <span :class="ui.leading({ class: props.ui?.leading })">
        <UIcon :name="appConfig.ui.icons.hash" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      </span>

      <slot />
    </a>
    <slot v-else />
  </h3>
</template>
