import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
    intl: service(),
    store: service(),
    cart: service(),
    beforeModel(...args) {
        this._super(args);
        const lang = localStorage.getItem('lang');
        return this.intl.setLocale(lang || 'ua-ua');
    },
    async model() {
        await this.cart.loadProducts();
        return hash({
            categories: this.store.findAll('category'),
        });
    }
});
