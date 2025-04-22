import { en } from "@nuxt/ui/locale";
import { defineLocale } from "@nuxt/ui/composables/defineLocale.js";
export default defineLocale({
  ...en,
  messages: {
    ...en.messages,
    authForm: {
      submit: "Continue",
      hidePassword: "Hide password",
      showPassword: "Show password"
    },
    banner: {
      close: "Close"
    },
    colorMode: {
      system: "System",
      light: "Light",
      dark: "Dark",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode"
    },
    contentSearch: {
      links: "Links",
      theme: "Theme"
    },
    contentSearchButton: {
      label: "Search..."
    },
    contentToc: {
      title: "On this page"
    },
    dashboardSearch: {
      theme: "Theme"
    },
    dashboardSearchButton: {
      label: "Search..."
    },
    dashboardSidebarCollapse: {
      expand: "Expand sidebar",
      collapse: "Collapse sidebar"
    },
    dashboardSidebarToggle: {
      close: "Close sidebar",
      open: "Open sidebar"
    },
    error: {
      clear: "Back to home"
    },
    header: {
      close: "Close menu",
      open: "Open menu"
    },
    prose: {
      pre: {
        copy: "Copy code to clipboard"
      }
    }
  }
});
