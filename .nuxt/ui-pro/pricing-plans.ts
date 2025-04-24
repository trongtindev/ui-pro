import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/pricing-plans"

const orientation = [
  "horizontal",
  "vertical"
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
  "base": "flex flex-col gap-y-8",
  "variants": {
    "orientation": {
      "horizontal": "lg:grid lg:grid-cols-[repeat(var(--count),minmax(0,1fr))]",
      "vertical": ""
    },
    "compact": {
      "false": "gap-x-8"
    },
    "scale": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "compact": false,
      "scale": true,
      "class": "lg:gap-x-13"
    }
  ]
}

export default result as typeof theme