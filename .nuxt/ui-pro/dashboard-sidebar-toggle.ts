import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/dashboard-sidebar-toggle"

const side = [
  "left",
  "right"
] as const

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
  "base": "lg:hidden",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
}

export default result as typeof theme