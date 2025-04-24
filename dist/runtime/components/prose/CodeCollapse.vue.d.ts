import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/code-collapse';
type ProseCodeCollapse = ComponentConfig<typeof theme, AppConfig, 'codeCollapse', 'uiPro.prose'>;
export interface ProseCodeCollapseProps {
    /**
     * The icon displayed to toggle the code.
     * @defaultValue appConfig.ui.icons.chevronDown
     */
    icon?: string;
    /**
     * The name displayed in the trigger label.
     * @defaultValue 'code'
     */
    name?: string;
    /**
     * The text displayed when the code is collapsed.
     * @defaultValue 'Expand'
     */
    openText?: string;
    /**
     * The text displayed when the code is expanded.
     * @defaultValue 'Collapse'
     */
    closeText?: string;
    class?: any;
    ui?: ProseCodeCollapse['slots'];
}
export interface ProseCodeCollapseSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    open?: boolean;
} & ProseCodeCollapseProps>, {
    name: string;
    openText: string;
    closeText: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    open?: boolean;
} & ProseCodeCollapseProps>, {
    name: string;
    openText: string;
    closeText: string;
}>>> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    name: string;
    openText: string;
    closeText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ProseCodeCollapseSlots> & ProseCodeCollapseSlots>;
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
