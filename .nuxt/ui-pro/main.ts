import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/main"

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
  "base": "min-h-[calc(100vh-var(--ui-header-height))]"
}

export default result as typeof theme