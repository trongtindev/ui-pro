<!-- eslint-disable vue/block-tag-newline -->
<script lang="ts">
import type { AppConfig } from '@nuxt/schema'
import type { ButtonProps, FormProps, FormFieldProps, FormSchema, FormSubmitEvent, SeparatorProps } from '@nuxt/ui'
import _appConfig from '#build/app.config'
import theme from '#build/ui-pro/auth-form'
import { tv } from '../utils/tv'
import type { InferSchemaType } from '../types/form'

const appConfig = _appConfig as AppConfig & { uiPro: { authForm: Partial<typeof theme> } }

const authForm = tv({ extend: tv(theme), ...(appConfig.uiPro?.authForm || {}) })

type AuthFormField = FormFieldProps & {
  name: string
  type?: 'checkbox' | 'select' | 'password' | 'text'
  defaultValue?: any
}

export interface AuthFormProps<T extends FormSchema<object>, F extends AuthFormField> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * The icon displayed above the title.
   * @IconifyIcon
   */
  icon?: string
  title?: string
  description?: string
  fields?: F[]
  /**
   * Display a list of Button under the description.
   * `{ color: 'neutral', variant: 'subtle', block: true }`{lang="ts-type"}
   */
  providers?: ButtonProps[]
  /**
   * The text displayed in the separator.
   * @defaultValue 'or'
   */
  separator?: string | SeparatorProps
  /**
   * Display a submit button at the bottom of the form.
   * `{ label: 'Continue', block: true }`{lang="ts-type"}
   */
  submit?: ButtonProps
  schema?: T
  validate?: FormProps<object>['validate']
  validateOn?: FormProps<object>['validateOn']
  validateOnInputDelay?: FormProps<object>['validateOnInputDelay']
  disabled?: FormProps<object>['disabled']
  loading?: ButtonProps['loading']
  class?: any
  ui?: Partial<typeof authForm.slots>
}

export type AuthFormEmits<T extends object> = {
  submit: [payload: FormSubmitEvent<T>]
}

type DynamicFieldSlots<T, F, SlotProps = { field: F, state: T }> = Record<string, (props: SlotProps) => any> & Record<`${keyof T extends string ? keyof T : never}-field`, (props: SlotProps) => any>

type DynamicFormFieldSlots<T> = Record<string, (props?: {}) => any> & Record<`${keyof T extends string ? keyof T : never}-${'label' | 'description' | 'hint' | 'help' | 'error'}`, (props?: {}) => any>

export type AuthFormSlots<T extends object, F extends AuthFormField> = {
  header(props?: {}): any
  leading(props?: {}): any
  title(props?: {}): any
  description(props?: {}): any
  validation(props?: {}): any
  footer(props?: {}): any
} & DynamicFieldSlots<T, F> & DynamicFormFieldSlots<T>

</script>

<script setup lang="ts" generic="T extends FormSchema<any>, F extends AuthFormField">
import { reactive, ref, useTemplateRef } from 'vue'
import { Primitive } from 'reka-ui'
import { omit } from '@nuxt/ui/utils/index'
import { useAppConfig } from '#imports'
import { useLocalePro } from '../composables/useLocalePro'

const props = withDefaults(defineProps<AuthFormProps<T, F>>(), {
  separator: 'or'
})

type FormStateType = InferSchemaType<T>

type TypedAuthFormField = AuthFormField & {
  name: keyof FormStateType
  defaultValue?: FormStateType[keyof FormStateType]
}

const state = reactive<FormStateType>((props.fields as TypedAuthFormField[] || []).reduce<FormStateType>((acc, field) => {
  if (field.name) {
    acc[field.name] = field.defaultValue
  }
  return acc
}, {} as FormStateType))

const emits = defineEmits<AuthFormEmits<typeof state>>()
const slots = defineSlots<AuthFormSlots<typeof state, F>>()

const appConfig = useAppConfig()
const { t } = useLocalePro()

const formRef = useTemplateRef('formRef')
const passwordVisibility = ref(false)

// eslint-disable-next-line vue/no-dupe-keys
const ui = authForm()

defineExpose({
  formRef
})
</script>

<template>
  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <div v-if="(icon || !!slots.icon) || (title || !!slots.title) || (description || !!slots.description) || !!slots.header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header">
        <div v-if="icon || !!slots.leading" :class="ui.leading({ class: props.ui?.leading })">
          <slot name="leading">
            <UIcon v-if="icon" :name="icon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
          </slot>
        </div>

        <div v-if="title || !!slots.title" :class="ui.title({ class: props.ui?.title })">
          <slot name="title">
            {{ title }}
          </slot>
        </div>

        <div v-if="description || !!slots.description" :class="ui.description({ class: props.ui?.description })">
          <slot name="description">
            {{ description }}
          </slot>
        </div>
      </slot>
    </div>

    <div :class="ui.body({ class: props.ui?.body })">
      <div v-if="providers?.length" :class="ui.providers({ class: props.ui?.providers })">
        <UButton
          v-for="(provider, index) in providers"
          :key="index"
          block
          color="neutral"
          variant="subtle"
          v-bind="provider"
        />
      </div>

      <USeparator
        v-if="providers?.length && fields?.length"
        v-bind="typeof separator === 'object' ? separator : { label: separator }"
        :class="ui.separator({ class: props.ui?.separator })"
      />

      <UForm
        v-if="fields?.length"
        ref="formRef"
        :state="state"
        :schema="schema"
        :validate="validate"
        :validate-on="validateOn"
        :class="ui.form({ class: props.ui?.form })"
        :disabled="disabled"
        @submit="emits('submit', $event)"
      >
        <UFormField
          v-for="field in fields"
          :key="field.name"
          :label="field.type === 'checkbox' ? '' : field.label ?? ''"
          :description="field.description"
          :help="field.help"
          :hint="field.hint"
          :name="field.name"
          :size="field.size"
          :required="field.required"
        >
          <slot :name="`${field.name}-field`" v-bind="{ state, field }">
            <UCheckbox v-if="field.type === 'checkbox'" v-model="state[field.name]" v-bind="omit(field, ['description', 'help', 'hint', 'size'])" />
            <USelectMenu v-else-if="field.type === 'select'" v-model="state[field.name]" v-bind="omit(field, ['description', 'help', 'hint', 'size'])" />
            <UInput
              v-else-if="field.type === 'password'"
              v-model="state[field.name]"
              :type="passwordVisibility ? 'text' : 'password'"
              v-bind="omit(field, ['label', 'description', 'help', 'hint', 'size', 'type', 'required', 'defaultValue'])"
              :ui="{ root: 'w-full' }"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  size="sm"
                  :icon="passwordVisibility ? appConfig.ui.icons.eyeOff : appConfig.ui.icons.eye"
                  :aria-label="passwordVisibility ? t('authForm.hidePassword') : t('authForm.showPassword')"
                  :aria-pressed="passwordVisibility"
                  aria-controls="password"
                  @click="passwordVisibility = !passwordVisibility"
                />
              </template>
            </UInput>
            <UInput
              v-else
              v-model="state[field.name]"
              v-bind="omit(field, ['label', 'description', 'help', 'hint', 'size', 'required', 'defaultValue'])"
              :ui="{ root: 'w-full' }"
            />
          </slot>

          <template v-if="!!slots[`${field.name}-label`]" #label>
            <slot :name="`${field.name}-label`" />
          </template>
          <template v-if="!!slots[`${field.name}-description`]" #description>
            <slot :name="`${field.name}-description`" />
          </template>
          <template v-if="!!slots[`${field.name}-hint`]" #hint>
            <slot :name="`${field.name}-hint`" />
          </template>
          <template v-if="!!slots[`${field.name}-help`]" #help>
            <slot :name="`${field.name}-help`" />
          </template>
          <template v-if="!!slots[`${field.name}-error`]" #error>
            <slot :name="`${field.name}-error`" />
          </template>
        </UFormField>

        <slot v-if="!!slots.validation" name="validation" />

        <UButton
          type="submit"
          :label="t('authForm.submit')"
          block
          :loading="loading"
          v-bind="submit"
        />
      </UForm>
    </div>

    <div v-if="!!slots.footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
