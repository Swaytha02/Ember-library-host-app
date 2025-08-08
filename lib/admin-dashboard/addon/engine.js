import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'admin-dashboard/config/environment';

const modulePrefix = 'admin-dashboard';

const Eng = Engine.extend({
  modulePrefix,
  Resolver,

  dependencies: {
    services: ['library-data', 'book-store', 'session', 'student-store', 'router'],
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;
