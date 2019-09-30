import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    // keyForRelationship(key) {
    //     return key === 'translations' ? 'category-translation' : key;
    // },
    attrs: {
        translations: { serialize: true }
    },
    serialize(snapshot, options) {
        const serialized = this._super(snapshot, options);
        if (serialized.data.included) {
            serialized.included = serialized.data.included;
            delete serialized.data.included;
        }
        return serialized;
    }
});
