import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/dashboard-panel';
import type { UseResizableProps } from '../composables/useResizable';
type DashboardPanel = ComponentConfig<typeof theme, AppConfig, 'dashboardPanel', 'uiPro'>;
export interface DashboardPanelProps extends Pick<UseResizableProps, 'id' | 'minSize' | 'maxSize' | 'defaultSize' | 'resizable'> {
    class?: any;
    ui?: DashboardPanel['slots'];
}
export interface DashboardPanelSlots {
    'default'(props?: {}): any;
    'header'(props?: {}): any;
    'body'(props?: {}): any;
    'footer'(props?: {}): any;
    'resize-handle'(props: {
        onMouseDown: (e: MouseEvent) => void;
        onTouchStart: (e: TouchEvent) => void;
    }): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<DashboardPanelProps>, {
    minSize: number;
    resizable: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<DashboardPanelProps>, {
    minSize: number;
    resizable: boolean;
}>>> & Readonly<{}>, {
    minSize: number;
    resizable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<DashboardPanelSlots> & DashboardPanelSlots>;
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
