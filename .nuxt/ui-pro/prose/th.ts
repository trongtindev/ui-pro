import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/th"

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
  "base": "py-3 px-4 font-semibold text-sm text-left border-e border-b first:border-s border-t border-muted"
}

export default result as typeof theme