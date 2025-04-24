import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/icon"

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
  "base": "size-4 shrink-0 align-sub"
}

export default result as typeof theme