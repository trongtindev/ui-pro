import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/content/content-search-button"

const result = typeof template === 'function' ? (template as Function)({
  "prefix": "U",
  "fonts": true,
  "colorMode": true,
  "theme": {
    "colors": [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error"
    ],
    "transitions": true
  }
}) : template

const theme = {
  "slots": {
    "base": "",
    "trailing": "hidden lg:flex items-center gap-0.5 ms-auto"
  }
}

export default result as typeof theme