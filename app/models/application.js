import DS from 'ember-data';
import {inject as service} from '@ember/service';
const {Model} = DS;

export default Model.reopen({
    ajax: service(),
    validatePath: 'validate',
    async validate(attributes = []) {
        try {
            const data = this.serialize();
            if (attributes.length > 0) {
                Object.keys(data.data.attributes).forEach(attribute => {
                    if (!attributes.includes(attribute)) {
                        delete data.data.attributes[attribute];
                    }
                })
            }
            await this.ajax.request(this.validatePath, {
                method: 'POST',
                contentType: 'application/vnd.api+json',
                data
            });
        } catch (e) {
            if (e.status === 422 && Array.isArray(e.payload.errors)) {
                const modelName = this.constructor.modelName;
                const serializer = this.store.serializerFor(modelName);
                const preparedErrors = serializer.extractErrors(this.store, this.store.modelFor(modelName), e.payload);
                this._internalModel.adapterDidInvalidate(preparedErrors);
            } else {
                this.handleErrors(e);
            }
        }
    },

    async save(...args) {
        try {
            await this._super(args);
        } catch (e) {
            if (e instanceof DS.InvalidError) {
                e.code = 422;
            }
            throw e;
        }
    },

    handleErrors(errors) {
        console.log(errors);
    }
});
