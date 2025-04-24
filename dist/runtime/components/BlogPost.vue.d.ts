import type { AppConfig } from '@nuxt/schema';
import type { BadgeProps, LinkProps, ComponentConfig } from '@nuxt/ui';
import theme from '#build/ui-pro/blog-post';
import type { UserProps } from '../types';
type BlogPost = ComponentConfig<typeof theme, AppConfig, 'blogPost', 'uiPro'>;
export interface BlogPostProps {
    /**
     * The element or component this component should render as.
     * @defaultValue 'article'
     */
    as?: any;
    title?: string;
    description?: string;
    /** The date of the blog post. Can be a string or a Date object. */
    date?: string | Date;
    /**
     * Display a badge on the blog post.
     * Can be a string or an object.
     * `{ color: 'neutral', variant: 'subtle' }`{lang="ts-type"}
     */
    badge?: string | BadgeProps;
    /** The authors of the blog post. */
    authors?: UserProps[];
    /** The image of the blog post. Can be a string or an object. */
    image?: string | Partial<HTMLImageElement>;
    /**
     * The orientation of the blog post.
     * @defaultValue 'vertical'
     */
    orientation?: BlogPost['variants']['orientation'];
    /**
     * @defaultValue 'outline'
     */
    variant?: BlogPost['variants']['variant'];
    to?: LinkProps['to'];
    target?: LinkProps['target'];
    onClick?: (event: MouseEvent) => void | Promise<void>;
    class?: any;
    ui?: BlogPost['slots'];
}
export interface BlogPostSlots {
    date(props?: {}): any;
    badge(props?: {}): any;
    title(props?: {}): any;
    description(props?: {}): any;
    authors(props?: {}): any;
    header(props?: {}): any;
    body(props?: {}): any;
    footer(props?: {}): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<BlogPostProps>, {
    as: string;
    orientation: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<BlogPostProps>, {
    as: string;
    orientation: string;
}>>> & Readonly<{}>, {
    orientation: BlogPost["variants"]["orientation"];
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<BlogPostSlots> & BlogPostSlots>;
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
