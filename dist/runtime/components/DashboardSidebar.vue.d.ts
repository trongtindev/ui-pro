import type { AppConfig } from '@nuxt/schema';
import type { ButtonProps, DrawerProps, ModalProps, SlideoverProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/dashboard-sidebar';
import type { UseResizableProps } from '../composables/useResizable';
type DashboardSidebar = ComponentConfig<typeof theme, AppConfig, 'dashboardSidebar', 'uiPro'>;
type DashboardSidebarMode = 'modal' | 'slideover' | 'drawer';
type DashboardSidebarMenu<T> = T extends 'modal' ? ModalProps : T extends 'slideover' ? SlideoverProps : T extends 'drawer' ? DrawerProps : never;
export interface DashboardSidebarProps<T extends DashboardSidebarMode = DashboardSidebarMode> extends Pick<UseResizableProps, 'id' | 'side' | 'minSize' | 'maxSize' | 'defaultSize' | 'resizable' | 'collapsible' | 'collapsedSize'> {
    /**
     * The mode of the sidebar menu.
     * @defaultValue 'modal'
     */
    mode?: T;
    /**
     * The props for the sidebar menu component.
     */
    menu?: DashboardSidebarMenu<T>;
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
    ui?: DashboardSidebar['slots'];
}
export interface DashboardSidebarSlots {
    'header'(props: {
        collapsed?: boolean;
        collapse?: (value: boolean) => void;
    }): any;
    'default'(props: {
        collapsed?: boolean;
        collapse?: (value: boolean) => void;
    }): any;
    'footer'(props: {
        collapsed?: boolean;
        collapse?: (value: boolean) => void;
    }): any;
    'toggle'(props: {
        open: boolean;
        toggle: () => void;
    }): any;
    'content'(props?: {}): any;
    'resize-handle'(props: {
        onMouseDown: (e: MouseEvent) => void;
        onTouchStart: (e: TouchEvent) => void;
    }): any;
}
declare const _default: <T extends DashboardSidebarMode>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:open"?: ((value: boolean) => any) | undefined;
        readonly "onUpdate:collapsed"?: ((value: boolean) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:open" | "onUpdate:collapsed"> & ({
        open?: boolean;
        collapsed?: boolean;
    } & DashboardSidebarProps<T>) & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<DashboardSidebarSlots> & DashboardSidebarSlots;
    emit: ((evt: "update:open", value: boolean) => void) & ((evt: "update:collapsed", value: boolean) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
