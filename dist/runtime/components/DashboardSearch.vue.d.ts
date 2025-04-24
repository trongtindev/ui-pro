import type { AppConfig } from '@nuxt/schema';
import type { CommandPaletteProps, CommandPaletteSlots, CommandPaletteGroup, CommandPaletteItem, ComponentConfig } from '@nuxt/ui';
import type { UseFuseOptions } from '@vueuse/integrations/useFuse';
import theme from '#build/ui-pro/dashboard-search';
type DashboardSearch = ComponentConfig<typeof theme, AppConfig, 'dashboardSearch', 'uiPro'>;
export interface DashboardSearchProps<T extends CommandPaletteItem = CommandPaletteItem> {
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
    groups?: CommandPaletteGroup<T>[];
    /**
     * Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](https://ui.nuxt.com/components/command-palette).
     * @defaultValue {}
     */
    fuse?: UseFuseOptions<T>;
    /**
     * When `true`, the theme command will be added to the groups.
     * @defaultValue true
     */
    colorMode?: boolean;
    class?: any;
    ui?: DashboardSearch['slots'] & CommandPaletteProps<CommandPaletteGroup<CommandPaletteItem>, CommandPaletteItem>['ui'];
}
export type DashboardSearchSlots = CommandPaletteSlots<CommandPaletteGroup<CommandPaletteItem>, CommandPaletteItem> & {
    content(props?: {}): any;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    open?: boolean;
    searchTerm?: string;
} & DashboardSearchProps<CommandPaletteItem>>, {
    shortcut: string;
    colorMode: boolean;
}>>, {
    commandPaletteRef: Readonly<import("vue").ShallowRef<unknown>>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
    "update:searchTerm": (value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    open?: boolean;
    searchTerm?: string;
} & DashboardSearchProps<CommandPaletteItem>>, {
    shortcut: string;
    colorMode: boolean;
}>>> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
}>, {
    colorMode: boolean;
    shortcut: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<{
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
        item: CommandPaletteItem;
        index: number;
    }) => any;
    'item-leading': (props: {
        item: CommandPaletteItem;
        index: number;
    }) => any;
    'item-label': (props: {
        item: CommandPaletteItem;
        index: number;
    }) => any;
    'item-trailing': (props: {
        item: CommandPaletteItem;
        index: number;
    }) => any;
} & Record<string, (props: {
    item: CommandPaletteGroup<CommandPaletteItem>;
    index: number;
}) => any> & Record<string, (props: {
    item: CommandPaletteItem;
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
        item: CommandPaletteItem;
        index: number;
    }) => any;
    'item-leading': (props: {
        item: CommandPaletteItem;
        index: number;
    }) => any;
    'item-label': (props: {
        item: CommandPaletteItem;
        index: number;
    }) => any;
    'item-trailing': (props: {
        item: CommandPaletteItem;
        index: number;
    }) => any;
} & Record<string, (props: {
    item: CommandPaletteGroup<CommandPaletteItem>;
    index: number;
}) => any> & Record<string, (props: {
    item: CommandPaletteItem;
    index: number;
}) => any> & {
    content(props?: {}): any;
}>;
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
