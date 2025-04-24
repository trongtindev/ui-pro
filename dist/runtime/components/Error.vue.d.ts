import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import type { NuxtError } from '#app';
import theme from '#build/ui-pro/error';
type Error = ComponentConfig<typeof theme, AppConfig, 'error', 'uiPro'>;
export interface ErrorProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    error?: Partial<NuxtError & {
        message: string;
    }>;
    /**
     * The URL to redirect to when the error is cleared.
     * @defaultValue '/'
     */
    redirect?: string;
    /**
     * Display a button to clear the error in the links slot.
     * `{ size: 'lg', color: 'primary', variant: 'solid', label: 'Back to home' }`{lang="ts-type"}
     * @defaultValue true
     */
    clear?: boolean | Partial<ButtonProps>;
    class?: any;
    ui?: Error['slots'];
}
export interface ErrorSlots {
    default(props?: {}): any;
    statusCode(props?: {}): any;
    statusMessage(props?: {}): any;
    links(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ErrorProps>, {
    as: string;
    redirect: string;
    clear: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ErrorProps>, {
    as: string;
    redirect: string;
    clear: boolean;
}>>> & Readonly<{}>, {
    clear: boolean | Partial<ButtonProps>;
    as: any;
    redirect: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ErrorSlots> & ErrorSlots>;
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
