import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ButtonSlots, ComponentConfig } from '@nuxt/ui';
import type { UseChatHelpers } from '@ai-sdk/vue';
import theme from '#build/ui-pro/chat-prompt-submit';
type ChatPromptSubmit = ComponentConfig<typeof theme, AppConfig, 'chatPromptSubmit', 'uiPro'>;
export interface ChatPromptSubmitProps extends /** @vue-ignore */ Pick<ButtonProps, 'size' | 'label'> {
    status?: UseChatHelpers['status']['value'];
    /**
     * The icon displayed in the button when the status is `ready`.
     * @defaultValue appConfig.ui.icons.arrowUp
     * @IconifyIcon
     */
    icon?: string;
    /**
     * The color of the button when the status is `ready`.
     * @defaultValue 'primary'
     */
    color?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `ready`.
     * @defaultValue 'solid'
     */
    variant?: ButtonProps['variant'];
    /**
     * The icon displayed in the button when the status is `streaming`.
     * @defaultValue appConfig.ui.icons.stop
     * @IconifyIcon
     */
    streamingIcon?: string;
    /**
     * The color of the button when the status is `streaming`.
     * @defaultValue 'neutral'
     */
    streamingColor?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `streaming`.
     * @defaultValue 'subtle'
     */
    streamingVariant?: ButtonProps['variant'];
    /**
     * The icon displayed in the button when the status is `submitted`.
     * @defaultValue appConfig.ui.icons.stop
     * @IconifyIcon
     */
    submittedIcon?: string;
    /**
     * The color of the button when the status is `submitted`.
     * @defaultValue 'neutral'
     */
    submittedColor?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `submitted`.
     * @defaultValue 'subtle'
     */
    submittedVariant?: ButtonProps['variant'];
    /**
     * The icon displayed in the button when the status is `error`.
     * @defaultValue appConfig.ui.icons.reload
     * @IconifyIcon
     */
    errorIcon?: string;
    /**
     * The color of the button when the status is `error`.
     * @defaultValue 'error'
     */
    errorColor?: ButtonProps['color'];
    /**
     * The variant of the button when the status is `error`.
     * @defaultValue 'soft'
     */
    errorVariant?: ButtonProps['variant'];
    ui?: ChatPromptSubmit['slots'] & ButtonProps['ui'];
    class?: any;
}
export interface ChatPromptSubmitEmits {
    (e: 'stop'): void;
    (e: 'reload'): void;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ChatPromptSubmitProps>, {
    status: string;
    streamingColor: string;
    streamingVariant: string;
    submittedColor: string;
    submittedVariant: string;
    errorColor: string;
    errorVariant: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    stop: () => void;
    reload: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ChatPromptSubmitProps>, {
    status: string;
    streamingColor: string;
    streamingVariant: string;
    submittedColor: string;
    submittedVariant: string;
    errorColor: string;
    errorVariant: string;
}>>> & Readonly<{
    onStop?: (() => any) | undefined;
    onReload?: (() => any) | undefined;
}>, {
    status: UseChatHelpers["status"]["value"];
    streamingColor: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    streamingVariant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
    submittedColor: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    submittedVariant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
    errorColor: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    errorVariant: "link" | "solid" | "outline" | "soft" | "subtle" | "ghost";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ButtonSlots> & ButtonSlots>;
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
