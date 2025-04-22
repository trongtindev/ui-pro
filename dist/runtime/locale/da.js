import { da } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...da,
  messages: {
    ...da.messages,
    authForm: {
      submit: "Forts\xE6t",
      hidePassword: "Skjul adgangskode",
      showPassword: "Vis adgangskode"
    },
    banner: {
      close: "Luk"
    },
    colorMode: {
      system: "System",
      light: "Lys",
      dark: "M\xF8rk",
      switchToLight: "Skift til lys tilstand",
      switchToDark: "Skift til m\xF8rk tilstand"
    },
    contentSearch: {
      links: "Links",
      theme: "Tema"
    },
    contentSearchButton: {
      label: "S\xF8g..."
    },
    contentToc: {
      title: "P\xE5 denne side"
    },
    dashboardSearch: {
      theme: "Tema"
    },
    dashboardSearchButton: {
      label: "S\xF8g..."
    },
    dashboardSidebarCollapse: {
      expand: "Udvid sidemenu",
      collapse: "Sammenfold sidemenu"
    },
    dashboardSidebarToggle: {
      close: "Luk sidemenu",
      open: "\xC5bn sidemenu"
    },
    error: {
      clear: "Tilbage til forsiden"
    },
    header: {
      close: "Luk menu",
      open: "\xC5bn menu"
    },
    prose: {
      pre: {
        copy: "Kopi\xE9r kode til udklipsholder"
      }
    }
  }
});
