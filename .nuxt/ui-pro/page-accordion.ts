import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/page-accordion"

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
  "slots": {
    "base": "",
    "trigger": "text-base",
    "body": "text-base text-muted"
  }
}

export default result as typeof theme