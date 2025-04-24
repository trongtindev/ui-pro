import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-card';
type PageCard = ComponentConfig<typeof theme, AppConfig, 'pageCard', 'uiPro'>;
export interface PageCardProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The icon displayed above the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    description?: string;
    /**
     * The orientation of the page card.
     * @defaultValue 'vertical'
     */
    orientation?: PageCard['variants']['orientation'];
    /**
     * Reverse the order of the default slot.
     * @defaultValue false
     */
    reverse?: boolean;
    /**
     * Display a line around the page card.
     */
    highlight?: boolean;
    /**
     * @defaultValue 'primary'
     */
    highlightColor?: PageCard['variants']['highlightColor'];
    /**
     * Display a spotlight effect that follows your mouse cursor and highlights borders on hover.
     */
    spotlight?: boolean;
    /**
     * @defaultValue 'primary'
     */
    spotlightColor?: PageCard['variants']['spotlightColor'];
    /**
     * @defaultValue 'outline'
     */
    variant?: PageCard['variants']['variant'];
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    onClick?: (event: MouseEvent) => void | Promise<void>;
    class?: any;
    ui?: PageCard['slots'];
}
export interface PageCardSlots {
    header(props?: {}): any;
    body(props?: {}): any;
    leading(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    footer(props?: {}): any;
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageCardProps>, {
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PageCardProps>, {
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: PageCard["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageCardSlots> & PageCardSlots>;
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
