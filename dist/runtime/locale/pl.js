import { pl } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...pl,
  messages: {
    ...pl.messages,
    authForm: {
      submit: "Kontynuuj",
      hidePassword: "Ukryj has\u0142o",
      showPassword: "Poka\u017C has\u0142o"
    },
    banner: {
      close: "Zamknij"
    },
    colorMode: {
      system: "System",
      light: "Jasny",
      dark: "Ciemny",
      switchToLight: "Prze\u0142\u0105cz na tryb jasny",
      switchToDark: "Prze\u0142\u0105cz na tryb ciemny"
    },
    contentSearch: {
      links: "Linki",
      theme: "Motyw"
    },
    contentSearchButton: {
      label: "Szukaj..."
    },
    contentToc: {
      title: "Na tej stronie"
    },
    dashboardSearch: {
      theme: "Motyw"
    },
    dashboardSearchButton: {
      label: "Szukaj..."
    },
    dashboardSidebarCollapse: {
      expand: "Rozwi\u0144 pasek boczny",
      collapse: "Zwi\u0144 pasek boczny"
    },
    dashboardSidebarToggle: {
      close: "Zamknij pasek boczny",
      open: "Otw\xF3rz pasek boczny"
    },
    error: {
      clear: "Powr\xF3t do strony g\u0142\xF3wnej"
    },
    header: {
      close: "Zamknij menu",
      open: "Otw\xF3rz menu"
    },
    prose: {
      pre: {
        copy: "Kopiuj kod do schowka"
      }
    }
  }
});
