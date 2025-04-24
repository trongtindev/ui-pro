import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/footer-columns';
type FooterColumns = ComponentConfig<typeof theme, AppConfig, 'footerColumns', 'uiPro'>;
export interface FooterColumnLink extends Omit<LinkProps, 'custom'> {
    label: string;
    /**
     * @IconifyIcon
     */
    icon?: string;
}
export interface FooterColumn<T extends FooterColumnLink = FooterColumnLink> {
    label: string;
    children?: T[];
}
export interface FooterColumnsProps<T extends FooterColumnLink = FooterColumnLink> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    class?: any;
    columns?: FooterColumn<T>[];
    ui?: FooterColumns['slots'];
}
type SlotProps<T> = (props: {
    link: T;
    active: boolean;
}) => any;
export interface FooterColumnsSlots<T extends FooterColumnLink = FooterColumnLink> {
    'left'(props?: {}): any;
    'default'(props?: {}): any;
    'right'(props?: {}): any;
    'link': SlotProps<T>;
    'link-leading': SlotProps<T>;
    'link-label': SlotProps<T>;
    'link-trailing': SlotProps<T>;
}
declare const _default: <T extends FooterColumnLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & FooterColumnsProps<T> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<FooterColumnsSlots<T>> & FooterColumnsSlots<T>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
