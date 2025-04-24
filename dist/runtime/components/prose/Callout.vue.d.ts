import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/callout';
type ProseCallout = ComponentConfig<typeof theme, AppConfig, 'callout', 'uiPro.prose'>;
export interface ProseCalloutProps {
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    icon?: string;
    /**
     * @defaultValue 'neutral'
     */
    color?: ProseCallout['variants']['color'];
    class?: any;
    ui?: ProseCallout['slots'];
}
export interface ProseCalloutSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ProseCalloutProps>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ProseCalloutProps>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ProseCalloutSlots> & ProseCalloutSlots>;
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
