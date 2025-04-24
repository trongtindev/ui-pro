import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/dashboard-group"

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
  "base": "fixed inset-0 flex overflow-hidden"
}

export default result as typeof theme