import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { computed } from '@ember/object';
import constants from 'alverde/utils/constants';

export default Component.extend({
    tagName: 'ul',
    intl: service(),

    selected: computed('intl.locale', function() {
        return this.languages[this.intl.primaryLocale];
    }),
    init(...args) {
        this._super(args);
        this.set('languages', constants.languages);
    },
    actions: {
        setSelection(val) {
            this.intl.setLocale(val);
            localStorage.setItem('lang', val);
        }
    }
});
