import { sk } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...sk,
  messages: {
    ...sk.messages,
    authForm: {
      submit: "Pokra\u010Dova\u0165",
      hidePassword: "Skry\u0165 heslo",
      showPassword: "Zobrazi\u0165 heslo"
    },
    banner: {
      close: "Zatvori\u0165"
    },
    colorMode: {
      system: "Syst\xE9m",
      light: "Svetl\xFD",
      dark: "Tmav\xFD",
      switchToLight: "Prepn\xFA\u0165 na svetl\xFD re\u017Eim",
      switchToDark: "Prepn\xFA\u0165 na tmav\xFD re\u017Eim"
    },
    contentSearch: {
      links: "Odkazy",
      theme: "T\xE9ma"
    },
    contentSearchButton: {
      label: "H\u013Eada\u0165..."
    },
    contentToc: {
      title: "Na tejto str\xE1nke"
    },
    dashboardSearch: {
      theme: "T\xE9ma"
    },
    dashboardSearchButton: {
      label: "H\u013Eada\u0165..."
    },
    dashboardSidebarCollapse: {
      expand: "Rozbali\u0165 bo\u010Dn\xFD panel",
      collapse: "Zbali\u0165 bo\u010Dn\xFD panel"
    },
    dashboardSidebarToggle: {
      close: "Zatvori\u0165 bo\u010Dn\xFD panel",
      open: "Otvori\u0165 bo\u010Dn\xFD panel"
    },
    error: {
      clear: "Sp\xE4\u0165 na domovsk\xFA str\xE1nku"
    },
    header: {
      close: "Zatvori\u0165 menu",
      open: "Otvori\u0165 menu"
    },
    prose: {
      pre: {
        copy: "Kop\xEDrova\u0165 k\xF3d do schr\xE1nky"
      }
    }
  }
});
