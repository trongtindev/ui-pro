import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/p"

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
  "base": "my-5 leading-7 text-pretty"
}

export default result as typeof theme