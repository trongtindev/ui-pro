<script>
import theme from "#build/ui-pro/pricing-table";
</script>

<script setup>
import { computed } from "vue";
import { Primitive } from "reka-ui";
import { createReusableTemplate } from "@vueuse/core";
import { useAppConfig } from "#imports";
import { useLocalePro } from "../composables/useLocalePro";
import { tv } from "../utils/tv";
const props = defineProps({
  as: { type: null, required: false },
  caption: { type: String, required: false },
  tiers: { type: Array, required: true },
  sections: { type: Array, required: true },
  class: { type: null, required: false },
  ui: { type: null, required: false }
});
const slots = defineSlots();
const { t } = useLocalePro();
const appConfig = useAppConfig();
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.uiPro?.pricingTable || {} })());
const [DefineTierTemplate, ReuseTierTemplate] = createReusableTemplate();
const [DefineFeatureTemplate, ReuseFeatureTemplate] = createReusableTemplate();
</script>

<template>
  <DefineTierTemplate v-slot="{ tier }">
    <slot :name="tier.id" :tier="tier">
      <slot name="tier" :tier="tier">
        <div :class="ui.tierTitleWrapper({ class: props.ui?.tierTitleWrapper })">
          <div :class="ui.tierTitle({ class: props.ui?.tierTitle })">
            <slot :name="`${tier.id}-title`" :tier="tier">
              <slot name="tier-title" :tier="tier">
                {{ tier.title }}
              </slot>
            </slot>
          </div>

          <slot :name="`${tier.id}-badge`" :tier="tier">
            <slot name="tier-badge" :tier="tier">
              <UBadge
                v-if="tier.badge"
                color="primary"
                variant="subtle"
                v-bind="typeof tier.badge === 'string' ? { label: tier.badge } : tier.badge"
                :class="ui.tierBadge({ class: props.ui?.tierBadge })"
              />
            </slot>
          </slot>
        </div>

        <div v-if="tier.description || !!slots['tier-description'] || !!slots[`${tier.id}-description`]" :class="ui.tierDescription({ class: props.ui?.tierDescription })">
          <slot :name="`${tier.id}-description`" :tier="tier">
            <slot name="tier-description" :tier="tier">
              {{ tier.description }}
            </slot>
          </slot>
        </div>

        <div v-if="tier.discount || tier.price || !!slots['tier-discount'] || !!slots[`${tier.id}-discount`] || !!slots['tier-price'] || !!slots[`${tier.id}-price`] || tier.billingCycle || tier.billingPeriod || !!slots['tier-billing'] || !!slots[`${tier.id}-billing`]" :class="ui.tierPriceWrapper({ class: props.ui?.tierPriceWrapper })">
          <div v-if="tier.discount && tier.price || !!slots[`${tier.id}-discount`] || !!slots['tier-discount']" :class="ui.tierDiscount({ class: props.ui?.tierDiscount })">
            <slot :name="`${tier.id}-discount`" :tier="tier">
              <slot name="tier-discount" :tier="tier">
                {{ tier.price }}
              </slot>
            </slot>
          </div>

          <div v-if="tier.discount || tier.price || !!slots[`${tier.id}-price`] || !!slots['tier-price']" :class="ui.tierPrice({ class: props.ui?.tierPrice })">
            <slot :name="`${tier.id}-price`" :tier="tier">
              <slot name="tier-price" :tier="tier">
                {{ tier.discount || tier.price }}
              </slot>
            </slot>
          </div>

          <div v-if="tier.billingCycle || tier.billingPeriod || !!slots[`${tier.id}-billing`] || !!slots['tier-billing']" :class="ui.tierBilling({ class: props.ui?.tierBilling })">
            <slot :name="`${tier.id}-billing`" :tier="tier">
              <slot name="tier-billing" :tier="tier">
                <span :class="ui.tierBillingPeriod({ class: props.ui?.tierBillingPeriod })">
                  {{ tier.billingPeriod || '\xA0' }}
                </span>

                <span v-if="tier.billingCycle" :class="ui.tierBillingCycle({ class: props.ui?.tierBillingCycle })">
                  {{ tier.billingCycle }}
                </span>
              </slot>
            </slot>
          </div>
        </div>

        <div v-if="!!slots[`${tier.id}-button`] || !!slots['tier-button'] || tier.button" :class="ui.tierButton({ class: props.ui?.tierButton })">
          <slot :name="`${tier.id}-button`" :tier="tier">
            <slot name="tier-button" :tier="tier">
              <UButton v-if="tier.button" block size="lg" v-bind="tier.button" />
            </slot>
          </slot>
        </div>
      </slot>
    </slot>
  </DefineTierTemplate>

  <DefineFeatureTemplate v-slot="{ feature, tier }">
    <template v-if="feature.tiers?.[tier.id]">
      <UIcon v-if="typeof feature.tiers[tier.id] === 'boolean'" :name="appConfig.ui.icons.success" :class="ui.tierFeatureIcon({ class: props.ui?.tierFeatureIcon, active: true })" />
      <template v-else>
        {{ feature.tiers[tier.id] }}
      </template>
    </template>

    <UIcon v-else :name="appConfig.ui.icons.minus" :class="ui.tierFeatureIcon({ class: props.ui?.tierFeatureIcon })" />
  </DefineFeatureTemplate>

  <Primitive :as="as" :class="ui.root({ class: [props.class, props.ui?.root] })">
    <table :class="ui.table({ class: props.ui?.table })">
      <caption v-if="caption || !!slots.caption" :class="ui.caption({ class: [props.ui?.caption] })">
        <slot name="caption">
          {{ caption || t('pricingTable.caption') }}
        </slot>
      </caption>

      <thead :class="ui.thead({ class: props.ui?.thead })">
        <tr :class="ui.tr({ class: props.ui?.tr })">
          <td />

          <th
            v-for="(tier, index) in tiers"
            :key="index"
            scope="col"
            :class="ui.tier({ class: props.ui?.tier, highlight: tier.highlight })"
          >
            <ReuseTierTemplate :tier="tier" />
          </th>
        </tr>
      </thead>

      <tbody :class="ui.tbody({ class: props.ui?.tbody })">
        <template v-for="(section, sectionIndex) in sections" :key="sectionIndex">
          <tr :class="ui.tr({ class: props.ui?.tr, section: sectionIndex > 0 })">
            <th scope="row" :class="ui.th({ class: props.ui?.th })">
              <div v-if="section.title" :class="ui.sectionTitle({ class: props.ui?.sectionTitle })">
                {{ section.title }}
              </div>
            </th>

            <td
              v-for="(tier, index) in tiers"
              :key="`${sectionIndex}-tier-${index}`"
              :class="ui.td({ class: props.ui?.td, highlight: tier.highlight })"
            />
          </tr>

          <tr v-for="(feature, featureIndex) in section.features" :key="`${sectionIndex}-feature-${featureIndex}`">
            <th scope="row" :class="ui.th({ class: props.ui?.th })">
              <div :class="ui.featureTitle({ class: props.ui?.featureTitle })">
                {{ feature.title }}
              </div>
            </th>

            <td
              v-for="(tier, index) in tiers"
              :key="`${sectionIndex}-feature-${featureIndex}-tier-${index}`"
              :class="ui.td({ class: props.ui?.td, highlight: tier.highlight })"
            >
              <div :class="ui.featureValue({ class: props.ui?.featureValue })">
                <ReuseFeatureTemplate :tier="tier" :feature="feature" />
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <ul :class="ui.list({ class: props.ui?.list })">
      <li v-for="(tier, index) in tiers" :key="index" :class="ui.item({ class: props.ui?.item, highlight: tier.highlight })">
        <ReuseTierTemplate :tier="tier" />

        <div v-for="(section, sectionIndex) in sections" :key="`section-${sectionIndex}`" :class="ui.section({ class: props.ui?.section })">
          <div v-if="section.title" :class="ui.sectionTitle({ class: props.ui?.sectionTitle })">
            {{ section.title }}
          </div>

          <div v-for="(feature, featureIndex) in section.features" :key="`section-${sectionIndex}-feature-${featureIndex}`" :class="ui.feature({ class: props.ui?.feature })">
            <div :class="ui.featureTitle({ class: props.ui?.featureTitle })">
              {{ feature.title }}
            </div>

            <div :class="ui.featureValue({ class: props.ui?.featureValue })">
              <ReuseFeatureTemplate :feature="feature" :tier="tier" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </Primitive>
</template>
