import { uk } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...uk,
  messages: {
    ...uk.messages,
    authForm: {
      submit: "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
      hidePassword: "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
      showPassword: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
    },
    banner: {
      close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438"
    },
    chatPrompt: {
      placeholder: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0442\u0443\u0442..."
    },
    chatPromptSubmit: {
      label: "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"
    },
    colorMode: {
      system: "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430",
      light: "\u0421\u0432\u0456\u0442\u043B\u0430",
      dark: "\u0422\u0435\u043C\u043D\u0430",
      switchToLight: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0441\u0432\u0456\u0442\u043B\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443",
      switchToDark: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0443"
    },
    contentSearch: {
      links: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      theme: "\u0422\u0435\u043C\u0430"
    },
    contentSearchButton: {
      label: "\u041F\u043E\u0448\u0443\u043A..."
    },
    contentToc: {
      title: "\u041D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456"
    },
    dashboardSearch: {
      theme: "\u0422\u0435\u043C\u0430"
    },
    dashboardSearchButton: {
      label: "\u041F\u043E\u0448\u0443\u043A..."
    },
    dashboardSidebarCollapse: {
      expand: "\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0431\u0456\u0447\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C",
      collapse: "\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0431\u0456\u0447\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C"
    },
    dashboardSidebarToggle: {
      close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0431\u0456\u0447\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C",
      open: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0431\u0456\u0447\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u044C"
    },
    error: {
      clear: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443"
    },
    header: {
      close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E",
      open: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E"
    },
    pricingTable: {
      caption: "\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F \u043F\u043B\u0430\u043D\u0456\u0432 \u0446\u0456\u043D"
    },
    prose: {
      pre: {
        copy: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u0434 \u0443 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0456\u043D\u0443"
      }
    }
  }
});
