import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  this.route('dashboard', function() {
    this.route('books-issued'),
    this.route('total-books'),
    this.route('total-users')
  })
});
