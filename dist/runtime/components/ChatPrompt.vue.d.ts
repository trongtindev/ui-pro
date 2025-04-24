import type { AppConfig } from '@nuxt/schema';
import type { TextareaProps, TextareaSlots, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/chat-prompt';
type ChatPrompt = ComponentConfig<typeof theme, AppConfig, 'chatPrompt', 'uiPro'>;
export interface ChatPromptProps extends /** @vue-ignore */ Pick<TextareaProps, 'autofocusDelay' | 'autoresizeDelay' | 'maxrows' | 'icon' | 'avatar' | 'loading' | 'loadingIcon'> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'form'
     */
    as?: any;
    /**
     * The placeholder text for the textarea.
     * @defaultValue t('chatPrompt.placeholder')
     */
    placeholder?: string;
    autofocus?: TextareaProps['autofocus'];
    autoresize?: TextareaProps['autoresize'];
    rows?: TextareaProps['rows'];
    /**
     * @defaultValue 'outline'
     */
    variant?: ChatPrompt['variants']['variant'];
    error?: Error;
    class?: any;
    ui?: ChatPrompt['slots'] & TextareaProps['ui'];
}
export interface ChatPromptEmits {
    (e: 'submit', event: Event): void;
    (e: 'close', event: Event): void;
}
export interface ChatPromptSlots extends TextareaSlots {
    header(props?: {}): any;
    footer(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    modelValue?: string;
} & ChatPromptProps>, {
    as: string;
    autofocus: boolean;
    autoresize: boolean;
    rows: number;
}>>, {
    textareaRef: any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (event: Event) => void;
    close: (event: Event) => void;
    "update:modelValue": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    modelValue?: string;
} & ChatPromptProps>, {
    as: string;
    autofocus: boolean;
    autoresize: boolean;
    rows: number;
}>>> & Readonly<{
    onClose?: ((event: Event) => any) | undefined;
    onSubmit?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    as: any;
    autofocus: boolean;
    autoresize: boolean;
    rows: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ChatPromptSlots> & ChatPromptSlots>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
