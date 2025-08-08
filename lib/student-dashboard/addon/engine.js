import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'student-dashboard/config/environment';

const modulePrefix = 'student-dashboard';

const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  lazyLoading: { enabled: true },

  isDevelopingAddon() {
    return true;
  },

  dependencies: {
    services: ['library-data', 'book-store', 'session', 'student-store', 'router']
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;

