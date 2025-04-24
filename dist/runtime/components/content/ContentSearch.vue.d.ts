import type { ContentNavigationItem } from '@nuxt/content';
import type { AppConfig } from '@nuxt/schema';
import type { LinkProps, CommandPaletteProps, CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem, ComponentConfig } from '@nuxt/ui';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import theme from '#build/ui-pro/content/content-search';
type ContentSearch = ComponentConfig<typeof theme, AppConfig, 'contentSearch', 'uiPro'>;
export interface ContentSearchLink extends Omit<LinkProps, 'custom'> {
    label?: string;
    description?: string;
    /**
     * @IconifyIcon
     */
    icon?: string;
    children?: ContentSearchLink[];
}
export interface ContentSearchFile {
    id: string;
    title: string;
    titles: string[];
    level: number;
    content: string;
}
export interface ContentSearchItem extends Omit<LinkProps, 'custom'>, CommandPaletteItem {
    level?: number;
    /**
     * @IconifyIcon
     */
    icon?: string;
}
export interface ContentSearchProps<T extends ContentSearchLink = ContentSearchLink> {
    /**
     * The icon displayed in the search input.
     * @defaultValue appConfig.ui.icons.search
     * @IconifyIcon
     */
    icon?: string;
    /**
     * Placeholder for the command palette search input.
     */
    placeholder?: string;
    /** When `true`, the loading icon will be displayed. */
    loading?: boolean;
    /**
     * The icon when the `loading` prop is `true`.
     * @defaultValue appConfig.ui.icons.loading
     * @IconifyIcon
     */
    loadingIcon?: string;
    /**
     * Keyboard shortcut to open the search (used by [`defineShortcuts`](https://ui.nuxt.com/composables/define-shortcuts))
     * @defaultValue 'meta_k'
     */
    shortcut?: string;
    /** Links group displayed as the first group in the command palette. */
    links?: T[];
    navigation?: ContentNavigationItem[];
    /** Custom groups displayed between navigation and color mode group. */
    groups?: CommandPaletteGroup<ContentSearchItem>[];
    files?: ContentSearchFile[];
    /**
     * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
     * @defaultValue { fuseOptions: { includeMatches: true } }
     */
    fuse?: UseFuseOptions<T>;
    /**
     * When `true`, the theme command will be added to the groups.
     * @defaultValue true
     */
    colorMode?: boolean;
    class?: any;
    ui?: ContentSearch['slots'] & CommandPaletteProps<CommandPaletteGroup<ContentSearchItem>, ContentSearchItem>['ui'];
}
export type ContentSearchSlots = CommandPaletteSlots<CommandPaletteGroup<ContentSearchItem>, ContentSearchItem> & {
    content(props?: {}): any;
};
declare const _default: <T extends ContentSearchLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:searchTerm"> & ({
        searchTerm?: string;
    } & ContentSearchProps<T>) & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{
        commandPaletteRef: Readonly<import("vue").ShallowRef<unknown>>;
    }>): void;
    attrs: any;
    slots: Readonly<{
        empty(props: {
            searchTerm?: string;
        }): any;
        close(props: {
            ui: { [K in keyof Required<{
                root?: import("tailwind-variants").ClassValue;
                input?: import("tailwind-variants").ClassValue;
                close?: import("tailwind-variants").ClassValue;
                content?: import("tailwind-variants").ClassValue;
                viewport?: import("tailwind-variants").ClassValue;
                group?: import("tailwind-variants").ClassValue;
                empty?: import("tailwind-variants").ClassValue;
                label?: import("tailwind-variants").ClassValue;
                item?: import("tailwind-variants").ClassValue;
                itemLeadingIcon?: import("tailwind-variants").ClassValue;
                itemLeadingAvatar?: import("tailwind-variants").ClassValue;
                itemLeadingAvatarSize?: import("tailwind-variants").ClassValue;
                itemLeadingChip?: import("tailwind-variants").ClassValue;
                itemLeadingChipSize?: import("tailwind-variants").ClassValue;
                itemTrailing?: import("tailwind-variants").ClassValue;
                itemTrailingIcon?: import("tailwind-variants").ClassValue;
                itemTrailingHighlightedIcon?: import("tailwind-variants").ClassValue;
                itemTrailingKbds?: import("tailwind-variants").ClassValue;
                itemTrailingKbdsSize?: import("tailwind-variants").ClassValue;
                itemLabel?: import("tailwind-variants").ClassValue;
                itemLabelBase?: import("tailwind-variants").ClassValue;
                itemLabelPrefix?: import("tailwind-variants").ClassValue;
                itemLabelSuffix?: import("tailwind-variants").ClassValue;
            }>]: (props?: Record<string, any>) => string; };
        }): any;
        item: (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
        'item-leading': (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
        'item-label': (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
        'item-trailing': (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
    } & Record<string, (props: {
        item: CommandPaletteGroup<ContentSearchItem>;
        index: number;
    }) => any> & Record<string, (props: {
        item: ContentSearchItem;
        index: number;
    }) => any> & {
        content(props?: {}): any;
    }> & {
        empty(props: {
            searchTerm?: string;
        }): any;
        close(props: {
            ui: { [K in keyof Required<{
                root?: import("tailwind-variants").ClassValue;
                input?: import("tailwind-variants").ClassValue;
                close?: import("tailwind-variants").ClassValue;
                content?: import("tailwind-variants").ClassValue;
                viewport?: import("tailwind-variants").ClassValue;
                group?: import("tailwind-variants").ClassValue;
                empty?: import("tailwind-variants").ClassValue;
                label?: import("tailwind-variants").ClassValue;
                item?: import("tailwind-variants").ClassValue;
                itemLeadingIcon?: import("tailwind-variants").ClassValue;
                itemLeadingAvatar?: import("tailwind-variants").ClassValue;
                itemLeadingAvatarSize?: import("tailwind-variants").ClassValue;
                itemLeadingChip?: import("tailwind-variants").ClassValue;
                itemLeadingChipSize?: import("tailwind-variants").ClassValue;
                itemTrailing?: import("tailwind-variants").ClassValue;
                itemTrailingIcon?: import("tailwind-variants").ClassValue;
                itemTrailingHighlightedIcon?: import("tailwind-variants").ClassValue;
                itemTrailingKbds?: import("tailwind-variants").ClassValue;
                itemTrailingKbdsSize?: import("tailwind-variants").ClassValue;
                itemLabel?: import("tailwind-variants").ClassValue;
                itemLabelBase?: import("tailwind-variants").ClassValue;
                itemLabelPrefix?: import("tailwind-variants").ClassValue;
                itemLabelSuffix?: import("tailwind-variants").ClassValue;
            }>]: (props?: Record<string, any>) => string; };
        }): any;
        item: (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
        'item-leading': (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
        'item-label': (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
        'item-trailing': (props: {
            item: ContentSearchItem;
            index: number;
        }) => any;
    } & Record<string, (props: {
        item: CommandPaletteGroup<ContentSearchItem>;
        index: number;
    }) => any> & Record<string, (props: {
        item: ContentSearchItem;
        index: number;
    }) => any> & {
        content(props?: {}): any;
    };
    emit: (evt: "update:searchTerm", value: string) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
