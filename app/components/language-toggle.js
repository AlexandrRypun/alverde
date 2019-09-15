import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { computed } from '@ember/object';
import constants from 'alverde/utils/constants';
import jq from 'jquery';

export default Component.extend({
    tagName: 'ul',
    intl: service(),
    // resizeToggle: false,

    selected: computed('intl.locale', 'resizeToggle', function() {
        // const currentWidth = window.innerWidth || document.documentElement.clientWidth;
        // const langNameKey = currentWidth > constants.mobileMenuWidth ? 'fullName' : 'shortName';
        return this.languages[this.intl.primaryLocale].shortName;
    }),
    // didInsertElement() {
    //     jq(window).resize( () => {
    //         this.toggleProperty('resizeToggle');
    //     });
    // },
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
