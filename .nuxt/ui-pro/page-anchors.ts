import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/page-anchors"

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
    "root": "",
    "list": "",
    "item": "relative",
    "link": "group text-sm flex items-center gap-1.5 py-1 focus-visible:outline-primary",
    "linkLeading": "rounded-md p-1 inline-flex ring-inset ring",
    "linkLeadingIcon": "size-4 shrink-0",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "size-3 absolute top-0 text-dimmed"
  },
  "variants": {
    "active": {
      "true": {
        "link": "text-primary font-semibold",
        "linkLeading": "bg-primary ring-primary text-inverted"
      },
      "false": {
        "link": [
          "text-muted hover:text-default font-medium",
          "transition-colors"
        ],
        "linkLeading": [
          "bg-elevated/50 ring-accented text-dimmed group-hover:bg-primary group-hover:ring-primary group-hover:text-inverted",
          "transition"
        ]
      }
    }
  }
}

export default result as typeof theme