import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/dashboard-sidebar"

const side = [
  "left",
  "right"
] as const

const toggleSide = [
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
  "slots": {
    "root": "relative hidden lg:flex flex-col min-h-svh min-w-16 w-(--width) shrink-0",
    "header": "h-(--ui-header-height) shrink-0 flex items-center gap-1.5 px-4",
    "body": "flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2",
    "footer": "shrink-0 flex items-center gap-1.5 px-4 py-2",
    "toggle": "",
    "handle": "",
    "content": "lg:hidden",
    "overlay": "lg:hidden"
  },
  "variants": {
    "menu": {
      "true": {
        "header": "sm:px-6",
        "body": "sm:px-6",
        "footer": "sm:px-6"
      }
    },
    "side": {
      "left": {
        "root": "border-r border-default"
      },
      "right": {
        "root": ""
      }
    },
    "toggleSide": {
      "left": {
        "toggle": ""
      },
      "right": {
        "toggle": "ms-auto"
      }
    }
  }
}

export default result as typeof theme