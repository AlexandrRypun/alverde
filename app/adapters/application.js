import DS from 'ember-data';
import config from 'bemiracle/config/environment';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin, {
    host: config.APP.api.host,

    createRecord(store, type, snapshot) {
        var data = {};
        var serializer = store.serializerFor(type.modelName);
        var url = this.buildURL(type.modelName, null, snapshot, 'createRecord');
        serializer.serializeIntoHash(data, type, snapshot, {
            includeId: true
        });
        if (data.data.included) {
            data.included = data.data.included;
            delete data.data.included;
        }
        return this.ajax(url, 'POST', {
            data
        });
    }
});
