import DS from 'ember-data';
import SaveRelationshipsMixin from '../mixins/save-relationships-mixin';

export default DS.JSONAPISerializer.extend(SaveRelationshipsMixin, {
    keyForAttribute(key) {
        return key;
    }
});
