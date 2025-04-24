import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/page-body"

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
  "base": "mt-8 pb-24 space-y-12"
}

export default result as typeof theme