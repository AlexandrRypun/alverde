import Mixin from '@ember/object/mixin';
import SaveRelationshipsMixin from 'ember-data-save-relationships';
import Ember from 'ember';
import { singularize } from 'ember-inflector';

export default Mixin.create(SaveRelationshipsMixin, {
    serializeRelationship(snapshot, data, rel) {
        const relKind = rel.kind;
        const relKey = rel.key;

        if (data && this.get(`attrs.${relKey}.serialize`) === true) {
            data.included = [];
            data.relationships = data.relationships || {};
            const key = this.keyForRelationship(relKey, relKind, 'serialize');
            const relationship = data.relationships[key] = data.relationships[key] || {};

            if (relKind === "belongsTo") {
                relationship.data = this.serializeRecord(snapshot.belongsTo(relKey));
            } else if (relKind === "hasMany") {
                relationship.data = []; // provide a default empty value
                const hasMany = snapshot.hasMany(relKey);
                if (hasMany !== undefined) {
                    hasMany.forEach(relRes => {
                        const rec = this.serializeRecord(relRes);
                        relationship.data.push(rec);
                        data.included.push(rec);
                    });
                }
            }
            data.included;
        }
    },
    serializeRecord(obj) {
        if (!obj) {
            return null;
        }

        const serialized = obj.serialize({__isSaveRelationshipsMixinCallback: true});

        if (obj.id) {
            serialized.data.id = obj.id;
            this.get('_visitedRecordIds')[obj.id] = {};
        } else {
            if (!serialized.data.attributes)
            {
                serialized.data.attributes = {};
            }
            serialized.data.id = `new_${obj.record.get('_internalModel')[Ember.GUID_KEY]}`;
            serialized.data.attributes.__id__ = obj.record.get('_internalModel')[Ember.GUID_KEY];
            this.get('_visitedRecordIds')[serialized.data.attributes.__id__] = {};
        }


        for (let relationshipId in serialized.data.relationships) {
            if (this.get('_visitedRecordIds')[relationshipId])
            {
                delete serialized.data.relationships[relationshipId];
            }
        }

        if (serialized.data.relationships === {})
        {
            delete serialized.data.relationships;
        }

        return serialized.data;
    },
    updateRecord(json, store) {
        if (json.attributes !== undefined && json.attributes.__id__ !== undefined)
        {
            json.type = singularize(json.type);

            const record = store.peekAll(json.type)
                .filterBy('currentState.stateName', "root.loaded.created.uncommitted")
                .findBy('_internalModel.' + Ember.GUID_KEY, json.attributes.__id__);

            if (record) {
                record.set('id', json.id);
                record._internalModel.id = json.id;
                record._internalModel.adapterWillCommit();
                store.didSaveRecord(record._internalModel);
            }

        }

        return json;
    }
});
