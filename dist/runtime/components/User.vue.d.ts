import type { AppConfig } from '@nuxt/schema';
import type { AvatarProps, ChipProps, LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/user';
type User = ComponentConfig<typeof theme, AppConfig, 'user', 'uiPro'>;
export interface UserProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'div'
     */
    as?: any;
    name?: string;
    description?: string;
    avatar?: Omit<AvatarProps, 'size'> & {
        [key: string]: any;
    };
    chip?: boolean | Omit<ChipProps, 'size' | 'inset'>;
    /**
     * @defaultValue 'md'
     */
    size?: User['variants']['size'];
    /**
     * The orientation of the user.
     * @defaultValue 'horizontal'
     */
    orientation?: User['variants']['orientation'];
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    onClick?: (event: MouseEvent) => void | Promise<void>;
    class?: any;
    ui?: User['slots'];
}
export interface UserSlots {
    avatar(props?: {}): any;
    name(props?: {}): any;
    description(props?: {}): any;
    default(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<UserProps>, {
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<UserProps>, {
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: User["variants"]["orientation"];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<UserSlots> & UserSlots>;
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
