import EmberObject from '@ember/object';
import SaveRelationshipsMixinMixin from 'alverde/mixins/save-relationships-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | SaveRelationshipsMixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let SaveRelationshipsMixinObject = EmberObject.extend(SaveRelationshipsMixinMixin);
    let subject = SaveRelationshipsMixinObject.create();
    assert.ok(subject);
  });
});
