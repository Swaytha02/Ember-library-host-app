import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'student-dashboard/config/environment';

const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  dependencies: {
    services: ['library-data', 'book-store', 'session', 'student-store'],
    externalRoutes: []
  }
});

loadInitializers(Eng, config.modulePrefix);

export default Eng;

