import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/field-group"

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
  "base": "my-5 divide-y divide-default *:not-last:pb-5"
}

export default result as typeof theme