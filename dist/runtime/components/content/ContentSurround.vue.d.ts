import type { ContentNavigationItem } from '@nuxt/content';
import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/content/content-surround';
type ContentSurround = ComponentConfig<typeof theme, AppConfig, 'contentSurround', 'uiPro'>;
export interface ContentSurroundLink extends ContentNavigationItem {
    description?: string;
    /**
     * @IconifyIcon
     */
    icon?: string;
    class?: any;
}
export interface ContentSurroundProps<T extends ContentSurroundLink = ContentSurroundLink> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    /**
     * The icon displayed in the prev link.
     * @defaultValue appConfig.ui.icons.arrowLeft
     * @IconifyIcon
     */
    prevIcon?: string;
    /**
     * The icon displayed in the next link.
     * @defaultValue appConfig.ui.icons.arrowRight
     * @IconifyIcon
     */
    nextIcon?: string;
    surround?: T[];
    class?: any;
    ui?: ContentSurround['slots'];
}
type SlotProps<T> = (props: {
    link: T;
}) => any;
export interface ContentSurroundSlots<T extends ContentSurroundLink = ContentSurroundLink> {
    'link': SlotProps<T>;
    'link-leading': SlotProps<T>;
    'link-title': SlotProps<T>;
    'link-description': SlotProps<T>;
}
declare const _default: <T extends ContentSurroundLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & ContentSurroundProps<T> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<ContentSurroundSlots<T>> & ContentSurroundSlots<T>;
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
