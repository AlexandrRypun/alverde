import DS from 'ember-data';
import {inject as service} from '@ember/service';
const {Model} = DS;

export default Model.reopen({
    ajax: service(),
    validatePath: 'validate',
    async validate() {
        try {
            await this.ajax.request(this.validatePath, {
                method: 'POST',
                contentType: 'application/vnd.api+json',
                data: this.serialize()
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
            if (!(e instanceof DS.InvalidError)) {
                this.handleErrors(e);
            }
        }
    },

    handleErrors(errors) {
        console.log(errors);
    }
});
