import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/footer-columns"

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
    "root": "xl:grid xl:grid-cols-3 xl:gap-8",
    "left": "mb-10 xl:mb-0",
    "center": "flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2",
    "right": "mt-10 xl:mt-0",
    "label": "text-sm font-semibold",
    "list": "mt-6 space-y-4",
    "item": "relative",
    "link": "group text-sm flex items-center gap-1.5 focus-visible:outline-primary",
    "linkLeadingIcon": "size-5 shrink-0",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "size-3 absolute top-0 text-dimmed inline-block"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-medium"
      },
      "false": {
        "link": [
          "text-muted hover:text-default",
          "transition-colors"
        ]
      }
    }
  }
}

export default result as typeof theme