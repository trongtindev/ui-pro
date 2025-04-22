'use strict';

const defu = require('defu');
const kit = require('@nuxt/kit');
const _package = require('./shared/ui-pro.BIDAE6aJ.cjs');
require('node:url');
require('scule');

var _documentCurrentScript =
  typeof document !== 'undefined' ? document.currentScript : null;
const module$1 = kit.defineNuxtModule({
  meta: {
    name: 'ui-pro',
    configKey: 'uiPro',
    compatibility: {
      nuxt: '>=3.16.0',
    },
  },
  defaults: {
    license: '',
    mdc: false,
    content: false,
  },
  async setup(options, nuxt) {
    if (!kit.hasNuxtModule('@nuxt/ui')) {
      await kit.installModule('@nuxt/ui');
    }
    const { resolve } = kit.createResolver(
      typeof document === 'undefined'
        ? require('u' + 'rl').pathToFileURL(__filename).href
        : (_documentCurrentScript &&
            _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' &&
            _documentCurrentScript.src) ||
            new URL('module.cjs', document.baseURI).href,
    );
    nuxt.options.alias['#ui-pro'] = resolve('./runtime');
    nuxt.options.appConfig.ui = defu.defu(nuxt.options.appConfig.ui || {}, {
      icons: _package.icons,
    });
    nuxt.options.router.options.scrollBehaviorType = 'smooth';
    if (
      kit.hasNuxtModule('@nuxtjs/mdc') ||
      options.mdc ||
      kit.hasNuxtModule('@nuxt/content') ||
      options.content
    ) {
      nuxt.options.mdc = defu.defu(nuxt.options.mdc, {
        highlight: {
          theme: {
            light: 'material-theme-lighter',
            default: 'material-theme',
            dark: 'material-theme-palenight',
          },
        },
        components: {
          map: {
            accordion: 'ProseAccordion',
            'accordion-item': 'ProseAccordionItem',
            badge: 'ProseBadge',
            callout: 'ProseCallout',
            card: 'ProseCard',
            'card-group': 'ProseCardGroup',
            caution: 'ProseCaution',
            'code-collapse': 'ProseCodeCollapse',
            'code-group': 'ProseCodeGroup',
            'code-icon': 'ProseCodeIcon',
            'code-preview': 'ProseCodePreview',
            'code-tree': 'ProseCodeTree',
            collapsible: 'ProseCollapsible',
            field: 'ProseField',
            'field-group': 'ProseFieldGroup',
            icon: 'ProseIcon',
            kbd: 'ProseKbd',
            note: 'ProseNote',
            steps: 'ProseSteps',
            tabs: 'ProseTabs',
            'tabs-item': 'ProseTabsItem',
            tip: 'ProseTip',
            warning: 'ProseWarning',
          },
        },
      });
      kit.addComponentsDir({
        path: resolve('./runtime/components/prose'),
        prefix: 'Prose',
        pathPrefix: false,
        global: true,
      });
    }
    if (kit.hasNuxtModule('@nuxt/content') || options.content) {
      kit.addComponentsDir({
        path: resolve('./runtime/components/content'),
        pathPrefix: false,
        prefix: nuxt.options.ui?.prefix || 'U',
      });
    }
    if (kit.hasNuxtModule('@nuxtjs/color-mode')) {
      kit.addComponentsDir({
        path: resolve('./runtime/components/color-mode'),
        pathPrefix: false,
        prefix: nuxt.options.ui?.prefix || 'U',
      });
    } else {
      kit.addImportsDir(resolve('./runtime/composables/color-mode'));
    }
    kit.addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
      prefix: nuxt.options.ui?.prefix || 'U',
      ignore: ['color-mode/**', 'content/**', 'prose/**'],
    });
    kit.addImportsDir(resolve('./runtime/composables'));
    _package.addTemplates(options, nuxt);
  },
});

module.exports = module$1;
