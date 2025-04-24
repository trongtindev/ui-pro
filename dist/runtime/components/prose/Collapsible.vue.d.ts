import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/collapsible';
type ProseCollapsible = ComponentConfig<typeof theme, AppConfig, 'collapsible', 'uiPro.prose'>;
export interface ProseCollapsibleProps {
    /**
     * The icon displayed to toggle the collapsible.
     * @defaultValue appConfig.ui.icons.chevronDown
     */
    icon?: string;
    /**
     * The name displayed in the trigger label.
     * @defaultValue 'properties'
     */
    name?: string;
    /**
     * The text displayed when the collapsible is open.
     * @defaultValue 'Show'
     */
    openText?: string;
    /**
     * The text displayed when the collapsible is closed.
     * @defaultValue 'Hide'
     */
    closeText?: string;
    class?: any;
    ui?: ProseCollapsible['slots'];
}
export interface ProseCollapsibleSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ProseCollapsibleProps>, {
    name: string;
    openText: string;
    closeText: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ProseCollapsibleProps>, {
    name: string;
    openText: string;
    closeText: string;
}>>> & Readonly<{}>, {
    name: string;
    openText: string;
    closeText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ProseCollapsibleSlots> & ProseCollapsibleSlots>;
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
