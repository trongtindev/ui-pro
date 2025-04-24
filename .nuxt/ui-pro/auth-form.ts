import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/auth-form"

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
    "root": "w-full space-y-6",
    "header": "flex flex-col text-center",
    "leading": "mb-2",
    "leadingIcon": "size-8 shrink-0",
    "title": "text-xl text-pretty font-semibold text-highlighted",
    "description": "mt-1 text-base text-pretty text-muted",
    "body": "gap-y-6 flex flex-col",
    "providers": "space-y-3",
    "separator": "",
    "form": "space-y-5",
    "footer": "text-sm text-center text-muted mt-2"
  }
}

export default result as typeof theme