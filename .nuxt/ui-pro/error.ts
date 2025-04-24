import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/error"

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
    "root": "min-h-[calc(100vh-var(--ui-header-height))] flex flex-col items-center justify-center text-center",
    "statusCode": "text-base font-semibold text-primary",
    "statusMessage": "mt-2 text-4xl sm:text-5xl font-bold text-highlighted text-balance",
    "message": "mt-4 text-lg text-muted text-balance",
    "links": "mt-8 flex items-center justify-center gap-6"
  }
}

export default result as typeof theme