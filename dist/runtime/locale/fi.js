import { fi } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...fi,
  messages: {
    ...fi.messages,
    authForm: {
      submit: "Jatka",
      hidePassword: "Piilota salasana",
      showPassword: "N\xE4yt\xE4 salasana"
    },
    banner: {
      close: "Sulje"
    },
    colorMode: {
      system: "J\xE4rjestelm\xE4",
      light: "Vaalea",
      dark: "Tumma",
      switchToLight: "Vaihda vaaleaan tilaan",
      switchToDark: "Vaihda tummaan tilaan"
    },
    contentSearch: {
      links: "Linkit",
      theme: "Teema"
    },
    contentSearchButton: {
      label: "Hae..."
    },
    contentToc: {
      title: "T\xE4ll\xE4 sivulla"
    },
    dashboardSearch: {
      theme: "Teema"
    },
    dashboardSearchButton: {
      label: "Hae..."
    },
    dashboardSidebarCollapse: {
      expand: "Laajenna sivupalkki",
      collapse: "Supista sivupalkki"
    },
    dashboardSidebarToggle: {
      close: "Sulje sivupalkki",
      open: "Avaa sivupalkki"
    },
    error: {
      clear: "Takaisin etusivulle"
    },
    header: {
      close: "Sulje valikko",
      open: "Avaa valikko"
    },
    prose: {
      pre: {
        copy: "Kopioi koodi leikep\xF6yd\xE4lle"
      }
    }
  }
});
