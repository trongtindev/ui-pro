<script>
import theme from "#build/ui-pro/chat-messages";
</script>

<script setup>
import { ref, computed, watch, nextTick, toRef, onMounted } from "vue";
import { defu } from "defu";
import { Presence } from "reka-ui";
import { useElementBounding, useEventListener, watchThrottled } from "@vueuse/core";
import { omit } from "@nuxt/ui/utils";
import { useAppConfig } from "#imports";
import { tv } from "../utils/tv";
import UChatMessage from "./ChatMessage.vue";
const props = defineProps({
  messages: { type: Array, required: false },
  status: { type: null, required: false },
  shouldAutoScroll: { type: Boolean, required: false, default: false },
  shouldScrollToBottom: { type: Boolean, required: false, default: true },
  autoScroll: { type: [Boolean, Object], required: false, default: true },
  autoScrollIcon: { type: String, required: false },
  user: { type: Object, required: false },
  assistant: { type: Object, required: false },
  compact: { type: Boolean, required: false },
  spacingOffset: { type: Number, required: false, default: 0 },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const proxySlots = omit(slots, ["default", "indicator", "viewport"]);
const appConfig = useAppConfig();
const userProps = toRef(() => defu(props.user, { side: "right", variant: "soft" }));
const assistantProps = toRef(() => defu(props.assistant, { side: "left", variant: "naked" }));
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.chatMessages || {} })({
  compact: props.compact
}));
const el = ref(null);
const parent = ref(null);
const messagesRefs = ref(/* @__PURE__ */ new Map());
const showAutoScroll = ref(false);
const lastMessageHeight = ref(0);
const lastMessageSubmitted = ref(false);
function registerMessageRef(id, element) {
  const elInstance = element?.$el;
  if (elInstance) {
    messagesRefs.value.set(id, elInstance);
  }
}
function scrollToMessage(id) {
  const element = messagesRefs.value.get(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
function scrollToBottom(smooth = true) {
  if (!parent.value) {
    return;
  }
  if (smooth) {
    parent.value.scrollTo({ top: parent.value.scrollHeight, behavior: "smooth" });
  } else {
    parent.value.scrollTop = parent.value.scrollHeight;
  }
}
watchThrottled([() => props.messages, () => props.status], ([_, status]) => {
  if (status !== "streaming") {
    return;
  }
  if (props.shouldAutoScroll) {
    requestAnimationFrame(() => nextTick(scrollToBottom));
  } else {
    checkScrollPosition();
  }
}, { throttle: 100, leading: true });
watch(() => props.status, (status) => {
  if (status !== "submitted") {
    return;
  }
  const lastMessage = props.messages?.[props.messages.length - 1];
  if (!lastMessage || lastMessage.role !== "user") {
    return;
  }
  nextTick(() => {
    lastMessageSubmitted.value = true;
    updateLastMessageHeight();
    nextTick(() => {
      scrollToMessage(lastMessage.id);
    });
  });
});
function checkScrollPosition() {
  if (!parent.value) {
    return;
  }
  const scrollPosition = parent.value.scrollTop + parent.value.clientHeight;
  const scrollHeight = parent.value.scrollHeight;
  const threshold = 100;
  showAutoScroll.value = scrollHeight - scrollPosition >= threshold;
}
function onAutoScrollClick() {
  scrollToBottom();
}
function getScrollParent(node) {
  if (!node) {
    return document.documentElement;
  }
  const overflowRegex = /auto|scroll/;
  let current = node;
  while (current && current !== document.body && current !== document.documentElement) {
    const style = window.getComputedStyle(current);
    if (overflowRegex.test(style.overflowY)) {
      return current;
    }
    current = current.parentElement;
  }
  return document.documentElement;
}
function updateLastMessageHeight() {
  if (!el.value || !parent.value || !props.messages?.length || !lastMessageSubmitted.value) {
    return;
  }
  const { height: parentHeight } = useElementBounding(parent.value);
  const lastMessage = props.messages.findLast((m) => m.role === "user");
  if (!lastMessage) {
    return;
  }
  const lastMessageEl = messagesRefs.value.get(lastMessage.id);
  if (!lastMessageEl) {
    return;
  }
  let spacingOffset = props.spacingOffset || 0;
  const elComputedStyle = window.getComputedStyle(el.value);
  const parentComputedStyle = window.getComputedStyle(parent.value);
  spacingOffset += Number.parseFloat(elComputedStyle.rowGap) || Number.parseFloat(elComputedStyle.gap) || 0;
  spacingOffset += Number.parseFloat(parentComputedStyle.paddingTop) || 0;
  spacingOffset += Number.parseFloat(parentComputedStyle.paddingBottom) || 0;
  lastMessageHeight.value = Math.max(parentHeight.value - lastMessageEl.offsetHeight - spacingOffset, 0);
}
onMounted(() => {
  parent.value = getScrollParent(el.value);
  if (!parent.value) {
    return;
  }
  if (props.shouldScrollToBottom) {
    nextTick(() => scrollToBottom(false));
  } else {
    checkScrollPosition();
  }
  useEventListener(parent, "scroll", checkScrollPosition);
  useEventListener(window, "resize", () => nextTick(updateLastMessageHeight));
});
</script>

<template>
  <div
    ref="el"
    :data-status="status"
    :class="ui.root({ class: [props.class, props.ui?.root] })"
    :style="{ '--last-message-height': `${lastMessageHeight}px` }"
  >
    <slot>
      <UChatMessage
        v-for="message in messages"
        :key="message.id"
        v-bind="{ ...message, ...message.role === 'user' ? userProps : assistantProps }"
        :ref="(el) => registerMessageRef(message.id, el)"
        :compact="compact"
      >
        <template v-for="(_, name) in proxySlots" #[name]>
          <slot :name="name" v-bind="{ message }" />
        </template>
      </UChatMessage>
    </slot>

    <UChatMessage
      v-if="status === 'submitted'"
      id="indicator"
      content=""
      role="assistant"
      v-bind="{ ...assistantProps, actions: void 0 }"
      :compact="compact"
    >
      <template #content>
        <div :class="ui.indicator({ class: props.ui?.indicator })">
          <slot name="indicator">
            <span />
            <span />
            <span />
          </slot>
        </div>
      </template>
    </UChatMessage>

    <Presence :present="showAutoScroll">
      <div :data-state="showAutoScroll ? 'open' : 'closed'" :class="ui.viewport({ class: props.ui?.viewport })">
        <slot name="viewport" :on-click="onAutoScrollClick">
          <UButton
            v-if="autoScroll"
            :icon="autoScrollIcon || appConfig.ui.icons.arrowDown"
            color="neutral"
            variant="outline"
            v-bind="typeof autoScroll === 'object' ? autoScroll : {}"
            :class="ui.autoScroll({ class: props.ui?.autoScroll })"
            @click="onAutoScrollClick"
          />
        </slot>
      </div>
    </Presence>
  </div>
</template>
