import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/prose/code-tree';
type ProseCodeTree = ComponentConfig<typeof theme, AppConfig, 'codeTree', 'uiPro.prose'>;
export interface ProseCodeTreeProps {
    /**
     * The default path to select.
     * @example 'package.json'
     */
    defaultValue?: string;
    /**
     * Expand all directories by default.
     * @defaultValue false
     */
    expandAll?: boolean;
    class?: any;
    ui?: ProseCodeTree['slots'];
}
export interface ProseCodeTreeSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ProseCodeTreeProps>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ProseCodeTreeProps>>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ProseCodeTreeSlots> & ProseCodeTreeSlots>;
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
