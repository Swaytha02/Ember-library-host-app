import { module, test } from 'qunit';
import { setupTest } from 'ember-library-host-app/tests/helpers';

module('Unit | Route | dashboard/profile/settings', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dashboard/profile/settings');
    assert.ok(route);
  });
});
