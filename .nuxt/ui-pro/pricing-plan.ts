const orientation = [
  "horizontal",
  "vertical"
] as const

const variant = [
  "solid",
  "outline",
  "soft",
  "subtle"
] as const

export default {
  "slots": {
    "root": "relative grid rounded-[calc(var(--ui-radius)*2.5)] p-6 lg:p-8 xl:p-10 gap-6",
    "header": "",
    "body": "flex flex-col min-w-0",
    "footer": "flex flex-col gap-6 items-center",
    "titleWrapper": "flex items-center gap-3",
    "title": "text-(--ui-text-highlighted) text-2xl sm:text-3xl text-pretty font-semibold",
    "description": "text-base text-pretty mt-2",
    "priceWrapper": "flex items-center gap-1",
    "price": "text-(--ui-text-highlighted) text-3xl sm:text-4xl font-semibold",
    "discount": "text-(--ui-text-muted) line-through text-xl sm:text-2xl",
    "billing": "flex flex-col justify-between min-w-0",
    "billingPeriod": "text-(--ui-text-toned) truncate text-xs font-medium",
    "billingCycle": "text-(--ui-text-muted) truncate text-xs font-medium",
    "features": "flex flex-col gap-3 flex-1 mt-6 grow-0",
    "feature": "flex items-center gap-2 min-w-0",
    "featureIcon": "size-5 shrink-0 text-(--ui-primary)",
    "featureTitle": "text-sm truncate",
    "badge": "",
    "button": "",
    "tagline": "text-base font-semibold text-(--ui-text)",
    "terms": "text-xs/5 text-(--ui-text-muted) text-center text-balance"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-(--ui-border)",
        "body": "lg:col-span-2 pb-6 lg:pb-0 lg:pr-6 justify-center",
        "footer": "lg:justify-center lg:items-center lg:p-6 lg:max-w-xs lg:w-full lg:mx-auto",
        "features": "lg:grid lg:grid-cols-2 lg:mt-12"
      },
      "vertical": {
        "footer": "justify-end",
        "priceWrapper": "mt-6"
      }
    },
    "variant": {
      "solid": {
        "root": "bg-(--ui-bg-inverted)",
        "title": "text-(--ui-bg)",
        "description": "text-(--ui-text-dimmed)",
        "price": "text-(--ui-bg)",
        "discount": "text-(--ui-text-dimmed)",
        "billingCycle": "text-(--ui-text-dimmed)",
        "billingPeriod": "text-(--ui-text-dimmed)",
        "featureTitle": "text-(--ui-text-dimmed)"
      },
      "outline": {
        "root": "bg-(--ui-bg) ring ring-inset ring-(--ui-border)",
        "description": "text-(--ui-text-muted)",
        "featureTitle": "text-(--ui-text-muted)"
      },
      "soft": {
        "root": "bg-(--ui-bg-elevated)/50",
        "description": "text-(--ui-text-toned)",
        "featureTitle": "text-(--ui-text-toned)"
      },
      "subtle": {
        "root": "bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
        "description": "text-(--ui-text)",
        "featureTitle": "text-(--ui-text)"
      }
    },
    "highlight": {
      "true": {
        "root": "ring-2 ring-inset ring-(--ui-primary)"
      }
    },
    "scale": {
      "true": {
        "root": "lg:scale-[1.1] lg:z-[1]"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal" as typeof orientation[number],
      "variant": "soft" as typeof variant[number],
      "class": {
        "root": "divide-(--ui-border-accented)"
      }
    },
    {
      "orientation": "horizontal" as typeof orientation[number],
      "variant": "subtle" as typeof variant[number],
      "class": {
        "root": "divide-(--ui-border-accented)"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline" as typeof variant[number]
  }
}