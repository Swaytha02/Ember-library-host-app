'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'admin-dashboard',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  isDevelopingAddon() {
    return true;
  },

  // addons: [
  //   'ember-math-helpers'
  // ],

  dependencies: {
    services: ['router'],
    externalRoutes: [],
    addons: [
      'shared-ui',
      'ember-math-helpers'
    ]
  },

});
