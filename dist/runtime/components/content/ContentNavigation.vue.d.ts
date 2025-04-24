import type { AccordionRootProps, AccordionRootEmits } from 'reka-ui';
import type { AppConfig } from '@nuxt/schema';
import type { BadgeProps, LinkProps, ComponentConfig } from '@nuxt/ui';
import type { ContentNavigationItem } from '@nuxt/content';
import theme from '#build/ui-pro/content/content-navigation';
type ContentNavigation = ComponentConfig<typeof theme, AppConfig, 'contentNavigation', 'uiPro'>;
export interface ContentNavigationLink extends ContentNavigationItem {
    /**
     * @IconifyIcon
     */
    icon?: string;
    /**
     * Display a badge on the link.
     * `{ color: 'neutral', variant: 'outline', size: 'sm' }`{lang="ts-type"}
     */
    badge?: string | number | BadgeProps;
    target?: LinkProps['target'];
    /**
     * @IconifyIcon
     */
    trailingIcon?: string;
    disabled?: boolean;
    children?: ContentNavigationLink[];
    defaultOpen?: boolean;
    active?: boolean;
    class?: any;
}
export interface ContentNavigationProps<T extends ContentNavigationLink = ContentNavigationLink> extends Pick<AccordionRootProps, 'disabled' | 'type'> {
    /**
     * The element or component this component should render as.
     * @defaultValue 'nav'
     */
    as?: any;
    /**
     * When `true`, the tree will be opened based on the current route.
     * When `false`, the tree will be closed.
     * When `undefined` (default), the first item will be opened with `type="single"` and the first level will be opened with `type="multiple"`.
     */
    defaultOpen?: boolean;
    /**
     * The icon displayed to toggle the accordion.
     * @defaultValue appConfig.ui.icons.chevronDown
     * @IconifyIcon
     */
    trailingIcon?: string;
    /**
     * @defaultValue 'primary'
     */
    color?: ContentNavigation['variants']['color'];
    /**
     * @defaultValue 'pill'
     */
    variant?: ContentNavigation['variants']['variant'];
    /**
     * Display a line next to the active link.
     * @defaultValue false
     */
    highlight?: boolean;
    /**
     * @defaultValue 'primary'
     */
    highlightColor?: ContentNavigation['variants']['highlightColor'];
    /**
     * When type is "single", allows closing content when clicking trigger for an open item.
     * When type is "multiple", this prop has no effect.
     * @defaultValue true
     */
    collapsible?: boolean;
    level?: number;
    navigation?: T[];
    class?: any;
    ui?: ContentNavigation['slots'];
}
export interface ContentNavigationEmits extends AccordionRootEmits {
}
type SlotProps<T> = (props: {
    link: T;
    active?: boolean;
}) => any;
export interface ContentNavigationSlots<T extends ContentNavigationLink = ContentNavigationLink> {
    'link': SlotProps<T>;
    'link-leading': SlotProps<T>;
    'link-title': SlotProps<T>;
    'link-trailing': SlotProps<T>;
}
declare const _default: <T extends ContentNavigationLink>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: string | string[] | undefined) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, "onUpdate:modelValue"> & ContentNavigationProps<T> & Partial<{}>> & (import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps);
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<ContentNavigationSlots<T>> & ContentNavigationSlots<T>;
    emit: (evt: "update:modelValue", value: string | string[] | undefined) => void;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
