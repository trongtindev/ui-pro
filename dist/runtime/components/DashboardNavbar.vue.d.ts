import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/dashboard-navbar';
import type { DashboardContext } from '../utils/dashboard';
type DashboardNavbar = ComponentConfig<typeof theme, AppConfig, 'dashboardNavbar', 'uiPro'>;
export interface DashboardNavbarProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The icon displayed next to the title.
     * @IconifyIcon
     */
    icon?: string;
    title?: string;
    /**
     * Customize the toggle button to open the sidebar.
     * `{ color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
     * @defaultValue true
     */
    toggle?: boolean | Partial<ButtonProps>;
    /**
     * The side to render the toggle button on.
     * @defaultValue 'left'
     */
    toggleSide?: 'left' | 'right';
    class?: any;
    ui?: DashboardNavbar['slots'];
}
type DashboardNavbarSlotsProps = Omit<DashboardContext, 'storage' | 'storageKey' | 'persistent' | 'unit'>;
export interface DashboardNavbarSlots {
    title(props?: {}): any;
    leading(props: DashboardNavbarSlotsProps): any;
    trailing(props: DashboardNavbarSlotsProps): any;
    left(props: DashboardNavbarSlotsProps): any;
    default(props: DashboardNavbarSlotsProps): any;
    right(props: DashboardNavbarSlotsProps): any;
    toggle(props: DashboardNavbarSlotsProps): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<DashboardNavbarProps>, {
    toggle: boolean;
    toggleSide: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<DashboardNavbarProps>, {
    toggle: boolean;
    toggleSide: string;
}>>> & Readonly<{}>, {
    toggle: boolean | Partial<ButtonProps>;
    toggleSide: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<DashboardNavbarSlots> & DashboardNavbarSlots>;
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
