import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-hero';
type PageHero = ComponentConfig<typeof theme, AppConfig, 'pageHero', 'uiPro'>;
export interface PageHeroProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    headline?: string;
    title?: string;
    description?: string;
    /**
     * Display a list of Button under the description.
     * `{ size: 'xl' }`{lang="ts-type"}
     */
    links?: ButtonProps[];
    /**
     * The orientation of the page hero.
     * @defaultValue 'vertical'
     */
    orientation?: PageHero['variants']['orientation'];
    /**
     * Reverse the order of the default slot.
     * @defaultValue false
     */
    reverse?: boolean;
    class?: any;
    ui?: PageHero['slots'];
}
export interface PageHeroSlots {
    default(props?: {}): any;
    top(props?: {}): any;
    bottom(props?: {}): any;
    headline(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    links(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageHeroProps>, {
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageHeroProps>, {
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: PageHero["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageHeroSlots> & PageHeroSlots>;
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
