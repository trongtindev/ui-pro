import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-header';
type PageHeader = ComponentConfig<typeof theme, AppConfig, 'pageHeader', 'uiPro'>;
export interface PageHeaderProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    headline?: string;
    title?: string;
    description?: string;
    /**
     * Display a list of Button next to the title.
     * `{ color: 'neutral', variant: 'outline' }`{lang="ts-type"}
     */
    links?: ButtonProps[];
    class?: any;
    ui?: PageHeader['slots'];
}
export interface PageHeaderSlots {
    headline(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    links(props?: {}): any;
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<PageHeaderProps>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<PageHeaderProps>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PageHeaderSlots> & PageHeaderSlots>;
export default _default;
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
