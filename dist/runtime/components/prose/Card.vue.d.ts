import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig, LinkProps } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/card';
type ProseCard = ComponentConfig<typeof theme, AppConfig, 'card', 'uiPro.prose'>;
export interface ProseCardProps {
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    icon?: string;
    title?: string;
    /**
     * @defaultValue 'primary'
     */
    color?: ProseCard['variants']['color'];
    class?: any;
    ui?: ProseCard['slots'];
}
export interface ProseCardSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ProseCardProps>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ProseCardProps>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ProseCardSlots> & ProseCardSlots>;
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
