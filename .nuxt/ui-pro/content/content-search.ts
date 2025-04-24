import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/content/content-search"

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
    "modal": "sm:max-w-3xl sm:h-[28rem]",
    "input": "[&>input]:text-base/5"
  }
}

export default result as typeof theme