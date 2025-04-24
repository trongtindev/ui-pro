import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/pricing-plans';
import type { PricingPlanProps } from '../types';
type PricingPlans = ComponentConfig<typeof theme, AppConfig, 'pricingPlans', 'uiPro'>;
export interface PricingPlansProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    plans?: PricingPlanProps[];
    /**
     * The orientation of the pricing plans.
     * @defaultValue 'horizontal'
     */
    orientation?: PricingPlans['variants']['orientation'];
    /**
     * When `true`, the plans will be displayed without gap.
     * @defaultValue false
     */
    compact?: boolean;
    /**
     * When `true`, the plans will be displayed with a larger gap.
     * Useful when one plan is scaled. Doesn't work with `compact`.
     * @defaultValue false
     */
    scale?: boolean;
    class?: any;
}
export interface PricingPlansSlots {
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PricingPlansProps>, {
    orientation: string;
    compact: boolean;
    scale: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PricingPlansProps>, {
    orientation: string;
    compact: boolean;
    scale: boolean;
}>>> & Readonly<{}>, {
    orientation: PricingPlans["variants"]["orientation"];
    compact: boolean;
    scale: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PricingPlansSlots> & PricingPlansSlots>;
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
