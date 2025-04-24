import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-feature';
type PageFeature = ComponentConfig<typeof theme, AppConfig, 'pageFeature', 'uiPro'>;
export interface PageFeatureProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The icon displayed next to the title when `orientation` is `horizontal` and above the title when `orientation` is `vertical`.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    description?: string;
    /**
     * The orientation of the page feature.
     * @defaultValue 'horizontal'
     */
    orientation?: PageFeature['variants']['orientation'];
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    onClick?: (event: MouseEvent) => void | Promise<void>;
    class?: any;
    ui?: PageFeature['slots'];
}
export interface PageFeatureSlots {
    leading(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageFeatureProps>, {
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageFeatureProps>, {
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: PageFeature["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageFeatureSlots> & PageFeatureSlots>;
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
