import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    classNames: ['shop_sidebar_area'],
    store: service(),

    async init(...args) {
        this._super(args);
        this.set('categories', await this.store.findAll('category'));
    },

    actions: {
        selectCategory(catId) {
            this.set('selectedCategoryId', catId);
        }
    }
});
