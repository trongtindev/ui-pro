import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/ol"

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
  "base": "list-decimal ps-6 my-5 marker:text-muted"
}

export default result as typeof theme