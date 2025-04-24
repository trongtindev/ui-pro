import template from "/Users/benjamincanac/GitHub/nuxt/ui-pro/src/theme/prose/collapsible"

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
    "base": "",
    "trigger": [
      "group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none",
      "transition-colors"
    ],
    "triggerIcon": "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "triggerLabel": "truncate"
  }
}

export default result as typeof theme