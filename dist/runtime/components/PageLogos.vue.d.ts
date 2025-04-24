import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-logos';
import type { PageMarqueeProps } from '../types';
type PageLogos = ComponentConfig<typeof theme, AppConfig, 'pageLogos', 'uiPro'>;
type PageLogosItem = {
    src: string;
    alt: string;
} | string;
export interface PageLogosProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    title?: string;
    items?: PageLogosItem[];
    marquee?: boolean | PageMarqueeProps;
    class?: any;
    ui?: PageLogos['slots'];
}
export interface PageLogosSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageLogosProps>, {
    marquee: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageLogosProps>, {
    marquee: boolean;
}>>> & Readonly<{}>, {
    marquee: boolean | PageMarqueeProps;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageLogosSlots> & PageLogosSlots>;
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
