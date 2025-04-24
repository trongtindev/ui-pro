import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-anchors';
type PageAnchors = ComponentConfig<typeof theme, AppConfig, 'pageAnchors', 'uiPro'>;
export interface PageAnchor extends Omit<LinkProps, 'custom'> {
    label: string;
    /**
     * @IconifyIcon
     */
    icon?: string;
}
export interface PageAnchorsProps<T extends PageAnchor = PageAnchor> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'nav'
     */
    as?: any;
    links?: T[];
    class?: any;
    ui?: PageAnchors['slots'];
}
type SlotProps<T> = (props: {
    link: T;
    active: boolean;
}) => any;
export interface PageAnchorsSlots<T extends PageAnchor = PageAnchor> {
    'link': SlotProps<T>;
    'link-leading': SlotProps<T>;
    'link-label': SlotProps<T>;
    'link-trailing': SlotProps<T>;
}
declare const _default: <T extends PageAnchor>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & PageAnchorsProps<T> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<PageAnchorsSlots<T>> & PageAnchorsSlots<T>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
