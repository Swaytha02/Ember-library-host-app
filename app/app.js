import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-library-host-app/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import Component from '@glimmer/component';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  engines = {
    'admin-dashboard': {
      dependencies: {
        services: [
          'library-data', 'book-store', 'session', 'student-store', 'router'
        ],
        Components: ['profile']
      }
    },
    'student-dashboard': {
      dependencies: {
        services: [
          'library-data', 'book-store', 'session', 'student-store', 'router'
        ],
        Components: ['profile']
      }
    }
  }
}

loadInitializers(App, config.modulePrefix);
