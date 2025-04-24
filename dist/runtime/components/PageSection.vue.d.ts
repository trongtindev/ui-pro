import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-section';
import type { PageFeatureProps } from '../types';
type PageSection = ComponentConfig<typeof theme, AppConfig, 'pageSection', 'uiPro'>;
export interface PageSectionProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'section'
     */
    as?: any;
    /**
     * The headline displayed above the title.
     */
    headline?: string;
    /**
     * The icon displayed above the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    description?: string;
    /**
     * Display a list of Button under the description.
     * `{ size: 'lg' }`{lang="ts-type"}
     */
    links?: ButtonProps[];
    /**
     * Display a list of PageFeature under the description.
     */
    features?: PageFeatureProps[];
    /**
     * The orientation of the section.
     * @defaultValue 'vertical'
     */
    orientation?: PageSection['variants']['orientation'];
    /**
     * Reverse the order of the default slot.
     * @defaultValue false
     */
    reverse?: boolean;
    class?: any;
    ui?: PageSection['slots'];
}
export interface PageSectionSlots {
    default(props?: {}): any;
    top(props?: {}): any;
    bottom(props?: {}): any;
    headline(props?: {}): any;
    leading(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    links(props?: {}): any;
    features(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageSectionProps>, {
    as: string;
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageSectionProps>, {
    as: string;
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: PageSection["variants"]["orientation"];
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageSectionSlots> & PageSectionSlots>;
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
