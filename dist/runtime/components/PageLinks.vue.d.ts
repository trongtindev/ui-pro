import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/page-links';
type PageLinks = ComponentConfig<typeof theme, AppConfig, 'pageLinks', 'uiPro'>;
export interface PageLink extends Omit<LinkProps, 'custom'> {
    label: string;
    /**
     * @IconifyIcon
     */
    icon?: string;
}
export interface PageLinksProps<T extends PageLink = PageLink> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'nav'
     */
    as?: any;
    title?: string;
    links?: T[];
    class?: any;
    ui?: PageLinks['slots'];
}
type SlotProps<T> = (props: {
    link: T;
    active: boolean;
}) => any;
export interface PageLinksSlots<T extends PageLink = PageLink> {
    'title'(props?: {}): any;
    'link': SlotProps<T>;
    'link-leading': SlotProps<T>;
    'link-label': SlotProps<T>;
    'link-trailing': SlotProps<T>;
}
declare const _default: <T extends PageLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & PageLinksProps<T> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<PageLinksSlots<T>> & PageLinksSlots<T>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
