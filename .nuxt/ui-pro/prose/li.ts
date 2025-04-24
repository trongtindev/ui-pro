import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/li"

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
  "base": "my-1.5 ps-1.5 leading-7 [&>ul]:my-0"
}

export default result as typeof theme