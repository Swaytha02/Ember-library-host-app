import EmberRouter from '@ember/routing/router';
import config from 'ember-library-host-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login-page', { path: '/login' });
  this.mount('admin-dashboard', { as: 'admin', path:'/admin',
    dependencies: {
      services: ['library-data', 'book-store', 'session', 'student-store'],
    }
  });
  this.mount('student-dashboard', { as: 'student', path:'/student',
    dependencies: {
      services: ['library-data', 'book-store', 'session', 'student-store'],
    }
  });
});
