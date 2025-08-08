import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  this.route('dashboard');
  this.route('profile', function() {
    this.route('settings');
  });
});
