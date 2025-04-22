'use strict';

const node_url = require('node:url');
const pathe = require('pathe');
const tinyglobby = require('tinyglobby');
const defu = require('defu');
const unplugin = require('unplugin');
const ui = require('@nuxt/ui/vite');
const _package = require('./shared/ui-pro.BIDAE6aJ.cjs');
const dotenv = require('dotenv');
require('scule');
require('@nuxt/kit');

var _documentCurrentScript =
  typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e.default : e;
}

const ui__default = /*#__PURE__*/ _interopDefaultCompat(ui);
const dotenv__default = /*#__PURE__*/ _interopDefaultCompat(dotenv);

function TemplatePlugin(options) {
  const templates = _package.getTemplates(options, options);
  const templateKeys = new Set(templates.map((t) => `#build/${t.filename}`));
  return {
    name: 'nuxt:ui-pro:templates',
    enforce: 'pre',
    resolveId(id) {
      if (templateKeys.has(id + '.ts')) {
        return id.replace('#build/', 'virtual:nuxt-ui-pro-templates/') + '.ts';
      }
    },
    loadInclude: (id) =>
      templateKeys.has(id.replace('virtual:nuxt-ui-pro-templates/', '#build/')),
    load(id) {
      id = id.replace('virtual:nuxt-ui-pro-templates/', '#build/');
      return templates
        .find((t) => `#build/${t.filename}` === id)
        .getContents({});
    },
  };
}

function AppConfigPlugin(appConfig) {
  return {
    name: 'nuxt:ui-pro:app-config',
    enforce: 'pre',
    resolveId(id) {
      if (id === '#build/app.config') {
        return 'virtual:nuxt-ui-app-config';
      }
    },
    transform(code, id) {
      if (id === 'virtual:nuxt-ui-app-config') {
        const existingConfig = new Function(
          `return ${code.match(/export default (.*)/s)?.[1]}`,
        )();
        const mergedConfig = defu.defu(existingConfig, {
          ui: {
            icons: _package.icons,
          },
          uiPro: appConfig.uiPro,
        });
        return `export default ${JSON.stringify(mergedConfig)}`;
      }
    },
  };
}

dotenv__default.config();

const runtimeDir = pathe.normalize(
  node_url.fileURLToPath(
    new URL(
      './runtime',
      typeof document === 'undefined'
        ? require('u' + 'rl').pathToFileURL(__filename).href
        : (_documentCurrentScript &&
            _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' &&
            _documentCurrentScript.src) ||
          new URL('unplugin.cjs', document.baseURI).href,
    ),
  ),
);
const resolveColors = (colors) => {
  return colors?.length
    ? [.../* @__PURE__ */ new Set(['primary', ...colors])]
    : ['primary', 'secondary', 'success', 'info', 'warning', 'error'];
};
const NuxtUIProPlugin = unplugin.createUnplugin((_options = {}) => {
  let options = defu.defu(_options, {
    prefix: 'U',
    colorMode: true,
    theme: {
      colors: void 0,
      transitions: true,
    },
    autoImport: {
      dirs: [pathe.join(runtimeDir, 'composables')],
    },
  });
  options.theme = options.theme || {};
  options.theme.colors = resolveColors(options.theme.colors);
  const components = tinyglobby.globSync('**/*.vue', {
    cwd: pathe.join(runtimeDir, 'components'),
    ignore: [
      !options.colorMode && 'color-mode/**/*.vue',
      'content/*.vue',
      'prose/**/*.vue',
    ].filter(Boolean),
  });
  const componentNames = new Set(
    components.map(
      (c) =>
        `${options.prefix}${c
          .split('/')
          .pop()
          ?.replace(/\.vue$/, '')}`,
    ),
  );
  const componentPaths = new Map(
    components.map((c) => {
      const name = c.replace(/\.vue$/, '');
      const componentName = `${options.prefix}${name.split('/').pop()}`;
      return [componentName, c];
    }),
  );
  const overrides = tinyglobby.globSync('**/*.vue', {
    cwd: pathe.join(runtimeDir, 'vue/components'),
    ignore: [!options.colorMode && 'color-mode/**/*.vue'].filter(Boolean),
  });
  const overrideNames = new Set(
    overrides.map(
      (c) =>
        `${options.prefix}${c
          .split('/')
          .pop()
          ?.replace(/\.vue$/, '')}`,
    ),
  );
  const overridePaths = new Map(
    overrides.map((c) => {
      const name = c.replace(/\.vue$/, '');
      const componentName = `${options.prefix}${name.split('/').pop()}`;
      return [componentName, c];
    }),
  );
  options = defu.defu(options, {
    components: {
      resolvers: [
        (componentName) => {
          if (overrideNames.has(componentName)) {
            const relativePath = overridePaths.get(componentName);
            return {
              name: 'default',
              from: pathe.join(runtimeDir, 'vue/components', relativePath),
            };
          }
          if (componentNames.has(componentName)) {
            const relativePath = componentPaths.get(componentName);
            return {
              name: 'default',
              from: pathe.join(runtimeDir, 'components', relativePath),
            };
          }
        },
      ],
    },
  });
  const appConfig = { uiPro: options.uiPro };
  return [
    ui__default(options),
    TemplatePlugin(options),
    AppConfigPlugin(appConfig),
  ].flat(1);
});

exports.NuxtUIProPlugin = NuxtUIProPlugin;
exports.runtimeDir = runtimeDir;
