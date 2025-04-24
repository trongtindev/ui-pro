import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/page-logos"

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
    "root": "relative overflow-hidden",
    "title": "text-lg text-center font-semibold text-highlighted",
    "logos": "mt-10",
    "logo": "size-10 shrink-0"
  },
  "variants": {
    "marquee": {
      "false": {
        "logos": "flex items-center shrink-0 justify-around gap-(--gap) [--gap:--spacing(16)]"
      }
    }
  }
}

export default result as typeof theme