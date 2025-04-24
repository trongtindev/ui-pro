import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/dashboard-sidebar-collapse"

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
  "base": "hidden lg:flex",
  "variants": {
    "side": {
      "left": "",
      "right": ""
    }
  }
}

export default result as typeof theme