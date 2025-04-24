import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-marquee';
type PageMarquee = ComponentConfig<typeof theme, AppConfig, 'pageMarquee', 'uiPro'>;
export interface PageMarqueeProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    pauseOnHover?: boolean;
    reverse?: boolean;
    orientation?: PageMarquee['variants']['orientation'];
    repeat?: number;
    overlay?: boolean;
    class?: any;
    ui?: PageMarquee['slots'];
}
export interface PageMarqueeSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageMarqueeProps>, {
    orientation: string;
    repeat: number;
    overlay: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageMarqueeProps>, {
    orientation: string;
    repeat: number;
    overlay: boolean;
}>>> & Readonly<{}>, {
    repeat: number;
    orientation: PageMarquee["variants"]["orientation"];
    overlay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageMarqueeSlots> & PageMarqueeSlots>;
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
