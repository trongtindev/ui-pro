import { vi } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...vi,
  messages: {
    ...vi.messages,
    authForm: {
      submit: "Ti\u1EBFp t\u1EE5c",
      hidePassword: "\u1EA8n m\u1EADt kh\u1EA9u",
      showPassword: "Hi\u1EC3n th\u1ECB m\u1EADt kh\u1EA9u"
    },
    banner: {
      close: "\u0110\xF3ng"
    },
    colorMode: {
      system: "H\u1EC7 th\u1ED1ng",
      light: "S\xE1ng",
      dark: "T\u1ED1i",
      switchToLight: "Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 s\xE1ng",
      switchToDark: "Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 t\u1ED1i"
    },
    contentSearch: {
      links: "Li\xEAn k\u1EBFt",
      theme: "Ch\u1EE7 \u0111\u1EC1"
    },
    contentSearchButton: {
      label: "T\xECm ki\u1EBFm..."
    },
    contentToc: {
      title: "Trong trang n\xE0y"
    },
    dashboardSearch: {
      theme: "Ch\u1EE7 \u0111\u1EC1"
    },
    dashboardSearchButton: {
      label: "T\xECm ki\u1EBFm..."
    },
    dashboardSidebarCollapse: {
      expand: "M\u1EDF r\u1ED9ng thanh b\xEAn",
      collapse: "Thu g\u1ECDn thanh b\xEAn"
    },
    dashboardSidebarToggle: {
      close: "\u0110\xF3ng thanh b\xEAn",
      open: "M\u1EDF thanh b\xEAn"
    },
    error: {
      clear: "Quay l\u1EA1i trang ch\u1EE7"
    },
    header: {
      close: "\u0110\xF3ng menu",
      open: "M\u1EDF menu"
    },
    prose: {
      pre: {
        copy: "Sao ch\xE9p m\xE3 v\xE0o b\u1ED9 nh\u1EDB t\u1EA1m"
      }
    }
  }
});
