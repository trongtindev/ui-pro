import type { AppConfig } from '@nuxt/schema';
import type { BadgeProps, ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/pricing-plan';
type PricingPlan = ComponentConfig<typeof theme, AppConfig, 'pricingPlan', 'uiPro'>;
type PricingPlanFeature = {
    title: string;
    /**
     * @defaultValue appConfig.ui.icons.success
     * @IconifyIcon
     */
    icon?: string;
};
export interface PricingPlanProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    title?: string;
    description?: string;
    /**
     * Display a badge next to the title.
     * Can be a string or an object.
     * `{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
     */
    badge?: string | BadgeProps;
    /**
     * The unit price period that appears next to the price.
     * Typically used to show the recurring interval.
     * @example "/month", "/year", "/seat/month"
     */
    billingCycle?: string;
    /**
     * Additional billing context that appears above the billing cycle.
     * Typically used to show the actual billing frequency.
     * @example "billed annually", "billed monthly", "per user, billed annually"
     */
    billingPeriod?: string;
    /**
     * The current price of the plan.
     * When used with `discount`, this becomes the original price.
     * @example "$99", "€99", "Free"
     */
    price?: string;
    /**
     * The discounted price of the plan.
     * When provided, the `price` prop will be displayed as strikethrough.
     * @example "$79", "€79"
     */
    discount?: string;
    /**
     * Display a list of features under the price.
     * Can be an array of strings or an array of objects.
     */
    features?: string[] | PricingPlanFeature[];
    /**
     * Display a buy button at the bottom.
     * `{ size: 'lg', block: true }`{lang="ts-type"}
     * Use the `onClick` field to add a click handler.
     */
    button?: ButtonProps;
    /**
     * Display a tagline highlighting the pricing value proposition.
     * @example 'Pay once, own it forever'
     */
    tagline?: string;
    /**
     * Display terms at the bottom.
     * @example '14-day free trial'
     */
    terms?: string;
    /**
     * The orientation of the pricing plan.
     * @defaultValue 'vertical'
     */
    orientation?: PricingPlan['variants']['orientation'];
    /**
     * @defaultValue 'outline'
     */
    variant?: PricingPlan['variants']['variant'];
    /** Display a ring around the pricing plan to highlight it. */
    highlight?: boolean;
    /** Enlarge the plan to make it more prominent. */
    scale?: boolean;
    class?: any;
    ui?: PricingPlan['slots'];
}
export interface PricingPlanSlots {
    badge(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    price(props?: {}): any;
    discount(props?: {}): any;
    billing(props?: {}): any;
    features(props?: {}): any;
    button(props?: {}): any;
    header(props?: {}): any;
    body(props?: {}): any;
    footer(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PricingPlanProps>, {
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PricingPlanProps>, {
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: PricingPlan["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<PricingPlanSlots> & PricingPlanSlots>;
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
