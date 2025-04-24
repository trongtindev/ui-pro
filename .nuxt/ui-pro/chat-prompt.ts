import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/chat-prompt"

const variant = [
  "outline",
  "soft",
  "subtle",
  "naked"
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
    "root": "relative flex flex-col items-stretch gap-2 px-2.5 py-2 w-full rounded-lg backdrop-blur",
    "header": "flex items-center gap-1.5",
    "body": "items-start",
    "footer": "flex items-center justify-between gap-1.5",
    "base": "text-base/5"
  },
  "variants": {
    "variant": {
      "outline": {
        "root": "bg-default/75 ring ring-default"
      },
      "soft": {
        "root": "bg-elevated/50"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default"
      },
      "naked": {
        "root": ""
      }
    }
  },
  "defaultVariants": {
    "variant": "outline" as typeof variant[number]
  }
}

export default result as typeof theme