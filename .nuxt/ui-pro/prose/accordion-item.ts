import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/accordion-item"

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
  "base": "leading-7 pb-3.5 text-muted"
}

export default result as typeof theme