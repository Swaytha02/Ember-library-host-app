'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'student-dashboard',

  lazyLoading: Object.freeze({
    enabled: true
  }),

  isDevelopingAddon() {
    return true;
  },

  dependencies: {
    services: ['router'],
    externalRoutes: [],
    addons: [
      'shared-ui'
    ]
  },

  included(app) {
    this._super.included.apply(this, arguments);
  }
});

