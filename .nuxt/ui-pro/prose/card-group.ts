import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/card-group"

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
  "base": "grid grid-cols-1 sm:grid-cols-2 gap-5"
}

export default result as typeof theme