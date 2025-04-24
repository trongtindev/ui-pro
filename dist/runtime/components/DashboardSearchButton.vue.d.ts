import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ButtonSlots, KbdProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/dashboard-search-button';
type DashboardSearchButton = ComponentConfig<typeof theme, AppConfig, 'dashboardSearchButton', 'uiPro'>;
export interface DashboardSearchButtonProps {
    /**
     * The icon displayed in the button.
     * @defaultValue appConfig.ui.icons.search
     * @IconifyIcon
     */
    icon?: string;
    /**
     * The label displayed in the button.
     * @defaultValue t('dashboardSearchButton.label')
     */
    label?: string;
    /**
     * The color of the button.
     * @defaultValue 'neutral'
     */
    color?: ButtonProps['color'];
    /**
     * The variant of the button.
     * Defaults to 'outline' when not collapsed, 'ghost' when collapsed.
     */
    variant?: ButtonProps['variant'];
    size?: ButtonProps['size'];
    /**
     * Whether the button is collapsed.
     * @defaultValue false
     */
    collapsed?: boolean;
    /**
     * The keyboard keys to display in the button.
     * `{ variant: 'subtle' }`{lang="ts-type"}
     * @defaultValue ['meta', 'k']
     */
    kbds?: KbdProps['value'][] | KbdProps[];
    ui?: DashboardSearchButton['slots'] & ButtonProps['ui'];
    class?: any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<DashboardSearchButtonProps>, {
    color: string;
    collapsed: boolean;
    kbds: () => string[];
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<DashboardSearchButtonProps>, {
    color: string;
    collapsed: boolean;
    kbds: () => string[];
}>>> & Readonly<{}>, {
    color: "error" | "info" | "primary" | "secondary" | "success" | "warning" | "neutral";
    collapsed: boolean;
    kbds: KbdProps["value"][] | KbdProps[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ButtonSlots> & ButtonSlots>;
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
