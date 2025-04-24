import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/page-grid"

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
  "base": "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
}

export default result as typeof theme