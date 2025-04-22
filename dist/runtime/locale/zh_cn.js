import { zh_cn } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...zh_cn,
  messages: {
    ...zh_cn.messages,
    authForm: {
      submit: "\u7EE7\u7EED",
      hidePassword: "\u9690\u85CF\u5BC6\u7801",
      showPassword: "\u663E\u793A\u5BC6\u7801"
    },
    banner: {
      close: "\u5173\u95ED"
    },
    colorMode: {
      system: "\u7CFB\u7EDF",
      light: "\u6D45\u8272",
      dark: "\u6DF1\u8272",
      switchToLight: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
      switchToDark: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F"
    },
    contentSearch: {
      links: "\u94FE\u63A5",
      theme: "\u4E3B\u9898"
    },
    contentSearchButton: {
      label: "\u641C\u7D22..."
    },
    contentToc: {
      title: "\u672C\u9875\u5185\u5BB9"
    },
    dashboardSearch: {
      theme: "\u4E3B\u9898"
    },
    dashboardSearchButton: {
      label: "\u641C\u7D22..."
    },
    dashboardSidebarCollapse: {
      expand: "\u5C55\u5F00\u4FA7\u8FB9\u680F",
      collapse: "\u6536\u8D77\u4FA7\u8FB9\u680F"
    },
    dashboardSidebarToggle: {
      close: "\u5173\u95ED\u4FA7\u8FB9\u680F",
      open: "\u6253\u5F00\u4FA7\u8FB9\u680F"
    },
    error: {
      clear: "\u8FD4\u56DE\u9996\u9875"
    },
    header: {
      close: "\u5173\u95ED\u83DC\u5355",
      open: "\u6253\u5F00\u83DC\u5355"
    },
    prose: {
      pre: {
        copy: "\u590D\u5236\u4EE3\u7801\u5230\u526A\u8D34\u677F"
      }
    }
  }
});
