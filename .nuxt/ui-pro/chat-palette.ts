import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/chat-palette"

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
    "root": "relative flex-1 flex flex-col min-h-0 min-w-0",
    "prompt": "px-0 rounded-t-none border-t border-default",
    "close": "",
    "content": "overflow-y-auto flex-1 flex flex-col py-3"
  }
}

export default result as typeof theme