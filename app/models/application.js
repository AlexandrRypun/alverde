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
                contentType: 'application/json',
                data: this.serialize()
            });
        } catch (e) {
            if (e.status === 422 && Array.isArray(e.payload.errors)) {
                e.payload.errors.forEach(error => {
                    this.errors.add(error.path, error.message);
                });
            }
        }
    }
});
