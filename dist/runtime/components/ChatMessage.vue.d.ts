import type { AppConfig } from '@nuxt/schema';
import type { AvatarProps, ButtonProps, ComponentConfig } from '@nuxt/ui';
import type { Message } from '@ai-sdk/vue';
import theme from '#build/ui-pro/chat-message';
type ChatMessage = ComponentConfig<typeof theme, AppConfig, 'chatMessage', 'uiPro'>;
export interface ChatMessageProps extends Message {
    /**
     * The element or component this component should render as.
     * @defaultValue 'article'
     */
    as?: any;
    /**
     * @IconifyIcon
     */
    icon?: string;
    avatar?: AvatarProps & {
        [key: string]: any;
    };
    /**
     * @defaultValue 'naked'
     */
    variant?: ChatMessage['variants']['variant'];
    /**
     * @defaultValue 'left'
     */
    side?: ChatMessage['variants']['side'];
    /**
     * Display a list of actions under the message.
     * The `label` will be used in a tooltip.
     * `{ size: 'xs', color: 'neutral', variant: 'ghost' }`{lang="ts-type"}
     */
    actions?: (Omit<ButtonProps, 'onClick'> & {
        onClick?: (e: MouseEvent, message: Message) => void;
    })[];
    /**
     * Render the message in a compact style.
     * This is done automatically when used inside a `UChatPalette`{lang="ts-type"}.
     * @defaultValue false
     */
    compact?: boolean;
    class?: any;
    ui?: ChatMessage['slots'];
}
export interface ChatMessageSlots {
    leading(props: {
        avatar: ChatMessageProps['avatar'];
    }): any;
    content(props: {
        content: ChatMessageProps['content'];
    }): any;
    actions(props: {
        actions: ChatMessageProps['actions'];
    }): any;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ChatMessageProps>, {
    as: string;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ChatMessageProps>, {
    as: string;
}>>> & Readonly<{}>, {
    as: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<ChatMessageSlots> & ChatMessageSlots>;
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
