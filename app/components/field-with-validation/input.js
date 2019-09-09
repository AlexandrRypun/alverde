import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['validation-field'],
    intl: service(),
    inputClasses: computed('class', 'error', function() {
        const inputClasses = this.class ? [this.class] : [];
        if (this.error) {
            inputClasses.push('validation-error');
        }
        return inputClasses.join(' ');
    }),
    error: computed('model.errors.[]', 'intl.locale', function() {
        const errors = this.model.errors.get(this.name);
        let error = '';
        if (Array.isArray(errors) && errors.length > 0) {
            error = errors.map(error => this.intl.t(`errors.validation.${error.message}`)).join('<br>');
        }
        return error;
    }),

    actions: {
        onChange() {
            this.onChange(this.name);
        }
    }
});
