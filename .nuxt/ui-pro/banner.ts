const color = [
  "primary",
  "secondary",
  "success",
  "info",
  "warning",
  "error",
  "neutral"
] as const

export default {
  "slots": {
    "root": [
      "relative z-50 w-full",
      "transition-colors"
    ],
    "container": "flex items-center justify-between gap-3 h-12",
    "left": "hidden lg:flex-1 lg:flex lg:items-center",
    "center": "flex items-center gap-1.5 min-w-0",
    "right": "lg:flex-1 flex items-center justify-end",
    "icon": "size-5 shrink-0 text-(--ui-bg) pointer-events-none",
    "title": "text-sm text-(--ui-bg) font-medium truncate",
    "actions": "flex gap-1.5 shrink-0 isolate",
    "close": "text-(--ui-bg) hover:bg-(--ui-bg)/10 focus-visible:bg-(--ui-bg)/10 -me-1.5 lg:me-0"
  },
  "variants": {
    "color": {
      "primary": {
        "root": "bg-(--ui-primary)"
      },
      "secondary": {
        "root": "bg-(--ui-secondary)"
      },
      "success": {
        "root": "bg-(--ui-success)"
      },
      "info": {
        "root": "bg-(--ui-info)"
      },
      "warning": {
        "root": "bg-(--ui-warning)"
      },
      "error": {
        "root": "bg-(--ui-error)"
      },
      "neutral": {
        "root": "bg-(--ui-bg-inverted)"
      }
    },
    "to": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-primary)/90"
      }
    },
    {
      "color": "secondary" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-secondary)/90"
      }
    },
    {
      "color": "success" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-success)/90"
      }
    },
    {
      "color": "info" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-info)/90"
      }
    },
    {
      "color": "warning" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-warning)/90"
      }
    },
    {
      "color": "error" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-error)/90"
      }
    },
    {
      "color": "neutral" as typeof color[number],
      "to": true,
      "class": {
        "root": "hover:bg-(--ui-bg-inverted)/90"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary" as typeof color[number]
  }
}