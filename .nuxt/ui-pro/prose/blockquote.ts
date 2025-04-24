import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/blockquote"

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
  "base": "border-s-4 border-accented ps-4 italic"
}

export default result as typeof theme