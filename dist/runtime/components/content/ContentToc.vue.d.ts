import type { CollapsibleRootProps, CollapsibleRootEmits } from 'reka-ui';
import type { TocLink } from '@nuxt/content';
import type { AppConfig } from '@nuxt/schema';
import type { ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/content/content-toc';
type ContentToc = ComponentConfig<typeof theme, AppConfig, 'contentToc', 'uiPro'>;
export type ContentTocLink = TocLink & {
    class?: any;
};
export interface ContentTocProps<T extends ContentTocLink = ContentTocLink> extends Pick<CollapsibleRootProps, 'defaultOpen' | 'open'> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'nav'
     */
    as?: any;
    /**
     * The icon displayed to collapse the content.
     * @defaultValue appConfig.ui.icons.chevronDown
     * @IconifyIcon
     */
    trailingIcon?: string;
    /**
     * The title of the table of contents.
     * @defaultValue t('contentToc.title')
     */
    title?: string;
    /**
     * @defaultValue 'primary'
     */
    color?: ContentToc['variants']['color'];
    /**
     * Display a line next to the active link.
     * @defaultValue false
     */
    highlight?: boolean;
    /**
     * @defaultValue 'primary'
     */
    highlightColor?: ContentToc['variants']['highlightColor'];
    links?: T[];
    class?: any;
    ui?: ContentToc['slots'];
}
export type ContentTocEmits = CollapsibleRootEmits & {
    move: [id: string];
};
type SlotProps<T> = (props: {
    link: T;
}) => any;
export interface ContentTocSlots<T extends ContentTocLink = ContentTocLink> {
    leading(props: {
        open: boolean;
    }): any;
    default(props: {
        open: boolean;
    }): any;
    trailing(props: {
        open: boolean;
    }): any;
    content(props: {
        links: T[];
    }): any;
    link: SlotProps<T>;
    top(props: {
        links?: T[];
    }): any;
    bottom(props: {
        links?: T[];
    }): any;
}
declare const _default: <T extends ContentTocLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:open"?: ((value: boolean) => any) | undefined;
        readonly onMove?: ((id: string) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:open" | "onMove"> & ContentTocProps<T> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<ContentTocSlots<T>> & ContentTocSlots<T>;
    emit: ((evt: "update:open", value: boolean) => void) & ((evt: "move", id: string) => void);
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
