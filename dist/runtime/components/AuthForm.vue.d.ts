import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, FormProps, FormFieldProps, FormSchema, FormSubmitEvent, SeparatorProps, ComponentConfig, InferInput } from '@nuxt/ui';
import theme from '#build/ui-pro/auth-form';
type AuthForm = ComponentConfig<typeof theme, AppConfig, 'authForm', 'uiPro'>;
type AuthFormField = FormFieldProps & {
    name: string;
    type?: 'checkbox' | 'select' | 'password' | 'text';
    defaultValue?: any;
};
export interface AuthFormProps<T extends FormSchema = FormSchema<object>, F extends AuthFormField = AuthFormField> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The icon displayed above the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    description?: string;
    fields?: F[];
    /**
     * Display a list of Button under the description.
     * `{ color: 'neutral', variant: 'subtle', block: true }`{lang="ts-type"}
     */
    providers?: ButtonProps[];
    /**
     * The text displayed in the separator.
     * @defaultValue 'or'
     */
    separator?: string | SeparatorProps;
    /**
     * Display a submit button at the bottom of the form.
     * `{ label: 'Continue', block: true }`{lang="ts-type"}
     */
    submit?: ButtonProps;
    schema?: T;
    validate?: FormProps<T>['validate'];
    validateOn?: FormProps<T>['validateOn'];
    validateOnInputDelay?: FormProps<T>['validateOnInputDelay'];
    disabled?: FormProps<T>['disabled'];
    loading?: ButtonProps['loading'];
    class?: any;
    ui?: AuthForm['slots'];
}
export type AuthFormEmits<T extends object> = {
    submit: [payload: FormSubmitEvent<T>];
};
type DynamicFieldSlots<T, F, SlotProps = {
    field: F;
    state: T;
}> = Record<string, (props: SlotProps) => any> & Record<`${keyof T extends string ? keyof T : never}-field`, (props: SlotProps) => any>;
type DynamicFormFieldSlots<T> = Record<string, (props?: {}) => any> & Record<`${keyof T extends string ? keyof T : never}-${'label' | 'description' | 'hint' | 'help' | 'error'}`, (props?: {}) => any>;
export type AuthFormSlots<T extends object = object, F extends AuthFormField = AuthFormField> = {
    header(props?: {}): any;
    leading(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    validation(props?: {}): any;
    footer(props?: {}): any;
} & DynamicFieldSlots<T, F> & DynamicFormFieldSlots<T>;
declare const _default: <T extends FormSchema, F extends AuthFormField>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onSubmit?: ((payload: FormSubmitEvent<import("vue").Reactive<InferInput<T>>>) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onSubmit"> & AuthFormProps<T, F> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{
        formRef: Readonly<import("vue").ShallowRef<unknown>>;
    }>): void;
    attrs: any;
    slots: Readonly<{
        header(props?: {}): any;
        leading(props?: {}): any;
        title(props?: {}): any;
        description(props?: {}): any;
        validation(props?: {}): any;
        footer(props?: {}): any;
    } & Record<string, (props: {
        field: F;
        state: import("vue").Reactive<InferInput<T>>;
    }) => any> & Record<`${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_1 ? T_1 extends InferInput<T> ? T_1 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_2 ? T_2 extends InferInput<T> ? T_2 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-field`, (props: {
        field: F;
        state: import("vue").Reactive<InferInput<T>>;
    }) => any> & Record<string, (props?: {}) => any> & Record<`${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_3 ? T_3 extends InferInput<T> ? T_3 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_4 ? T_4 extends InferInput<T> ? T_4 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-error` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_5 ? T_5 extends InferInput<T> ? T_5 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_6 ? T_6 extends InferInput<T> ? T_6 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-label` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_7 ? T_7 extends InferInput<T> ? T_7 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_8 ? T_8 extends InferInput<T> ? T_8 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-description` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_9 ? T_9 extends InferInput<T> ? T_9 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_10 ? T_10 extends InferInput<T> ? T_10 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-hint` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_11 ? T_11 extends InferInput<T> ? T_11 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_12 ? T_12 extends InferInput<T> ? T_12 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-help`, (props?: {}) => any>> & {
        header(props?: {}): any;
        leading(props?: {}): any;
        title(props?: {}): any;
        description(props?: {}): any;
        validation(props?: {}): any;
        footer(props?: {}): any;
    } & Record<string, (props: {
        field: F;
        state: import("vue").Reactive<InferInput<T>>;
    }) => any> & Record<`${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_13 ? T_13 extends InferInput<T> ? T_13 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_14 ? T_14 extends InferInput<T> ? T_14 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-field`, (props: {
        field: F;
        state: import("vue").Reactive<InferInput<T>>;
    }) => any> & Record<string, (props?: {}) => any> & Record<`${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_15 ? T_15 extends InferInput<T> ? T_15 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_16 ? T_16 extends InferInput<T> ? T_16 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-error` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_17 ? T_17 extends InferInput<T> ? T_17 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_18 ? T_18 extends InferInput<T> ? T_18 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-label` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_19 ? T_19 extends InferInput<T> ? T_19 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_20 ? T_20 extends InferInput<T> ? T_20 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-description` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_21 ? T_21 extends InferInput<T> ? T_21 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_22 ? T_22 extends InferInput<T> ? T_22 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-hint` | `${keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_23 ? T_23 extends InferInput<T> ? T_23 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never) extends string ? string & (keyof import("vue").UnwrapNestedRefs<InferInput<T>> | keyof (InferInput<T> extends infer T_24 ? T_24 extends InferInput<T> ? T_24 extends readonly any[] ? import("@vue/reactivity").ReactiveMarker : {} : never : never)) : never}-help`, (props?: {}) => any>;
    emit: (evt: "submit", payload: FormSubmitEvent<import("vue").Reactive<InferInput<T>>>) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
