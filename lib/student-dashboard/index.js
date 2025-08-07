'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'student-dashboard',

  lazyLoading: Object.freeze({
    enabled: false
  }),

  isDevelopingAddon() {
    return true;
  },

  externalDependencies: [
    'service:book-store',
    'service:student-store',
    'service:session',
  ]
});
