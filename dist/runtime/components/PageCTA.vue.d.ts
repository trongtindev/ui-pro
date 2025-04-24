import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-cta';
type PageCTA = ComponentConfig<typeof theme, AppConfig, 'pageCTA', 'uiPro'>;
export interface PageCTAProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    class?: any;
    title?: string;
    description?: string;
    /**
     * The orientation of the page cta.
     * @defaultValue 'vertical'
     */
    orientation?: PageCTA['variants']['orientation'];
    /**
     * Reverse the order of the default slot.
     * @defaultValue false
     */
    reverse?: boolean;
    /**
     * @defaultValue 'outline'
     */
    variant?: PageCTA['variants']['variant'];
    /**
     * Display a list of Button under the description.
     * `{ size: 'lg' }`{lang="ts-type"}
     */
    links?: ButtonProps[];
    ui?: PageCTA['slots'];
}
export interface PageCTASlots {
    default(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    links(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageCTAProps>, {
    orientation: string;
    reverse: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageCTAProps>, {
    orientation: string;
    reverse: boolean;
}>>> & Readonly<{}>, {
    reverse: boolean;
    orientation: PageCTA["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageCTASlots> & PageCTASlots>;
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
