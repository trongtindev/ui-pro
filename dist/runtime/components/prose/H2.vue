<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/prose/h2'
import { tv } from '../../utils/tv'

const appConfigProseH2 = _appConfig as AppConfig & { uiPro: { prose: { h2: Partial<typeof theme> } } }

const proseH2 = tv({ extend: tv(theme), ...(appConfigProseH2.uiPro?.prose?.h2 || {}) })
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useRuntimeConfig, useAppConfig } from '#imports'

const props = defineProps<{
  id?: string
  class?: any
  ui?: Partial<typeof proseH2.slots>
}>()

// eslint-disable-next-line vue/no-dupe-keys
const ui = proseH2()

const appConfig = useAppConfig()
const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && typeof headings?.anchorLinks === 'object' && headings.anchorLinks.h2)
</script>

<template>
  <h2 :id="id" :class="ui.base({ class: props.class })">
    <a v-if="id && generate" :href="`#${id}`" :class="ui.link({ class: props.ui?.link })">
      <span :class="ui.leading({ class: props.ui?.leading })">
        <UIcon :name="appConfig.ui.icons.hash" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      </span>

      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
