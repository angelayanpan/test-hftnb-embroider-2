'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },

    'ember-holy-futuristic-template-namespacing-batman': {
      excludeNestedAddonTransforms: true,
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
