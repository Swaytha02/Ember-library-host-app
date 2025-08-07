'use stricrt';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
    name: 'shared',

    isDevelopingAddon() {
        return true;
    },

    included() {
        this._super.included.apply(this, arguments);
        this.import('app/helpers/subtract.js'); 
    }
});