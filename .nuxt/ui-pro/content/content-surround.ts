const direction = [
  "left",
  "right"
] as const

export default {
  "slots": {
    "root": "grid grid-cols-1 sm:grid-cols-2 gap-8",
    "link": [
      "group block px-6 py-8 rounded-[calc(var(--ui-radius)*2)] border border-(--ui-border) hover:bg-(--ui-bg-elevated)/50 focus-visible:outline-(--ui-primary)",
      "transition-colors"
    ],
    "linkLeading": [
      "inline-flex items-center rounded-full p-1.5 bg-(--ui-bg-elevated) group-hover:bg-(--ui-primary)/10 ring ring-(--ui-border-accented) mb-4 group-hover:ring-(--ui-primary)/50",
      "transition"
    ],
    "linkLeadingIcon": [
      "size-5 shrink-0 text-(--ui-text-highlighted) group-hover:text-(--ui-primary)",
      "transition-[color,translate]"
    ],
    "linkTitle": "font-medium text-[15px] text-(--ui-text-highlighted) mb-1 truncate",
    "linkDescription": "text-sm text-(--ui-text-muted) line-clamp-2"
  },
  "variants": {
    "direction": {
      "left": {
        "linkLeadingIcon": [
          "group-active:-translate-x-0.5"
        ]
      },
      "right": {
        "link": "text-right",
        "linkLeadingIcon": [
          "group-active:translate-x-0.5"
        ]
      }
    }
  }
}