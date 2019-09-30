import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
    intl: service(),
    store: service(),
    cart: service(),
    session: service(),
    notifications: service(),
    beforeModel(transition, ...args) {
        this._super(transition, args);
        const lang = localStorage.getItem('lang');
        this.intl.setLocale(lang || 'ua-ua');
        if (transition.targetName.startsWith('admin.') && (!this.session.isAuthenticated || this.session.data.authenticated.tokenData.role !== 'admin')) {
            this.notifications.error(this.intl.t('errors.forbidden'));
            this.transitionTo('index');
        }
    },
    async model() {
        await this.cart.loadProducts();
        return hash({
            categories: this.store.query('category', {include: ['translations']})
        });
    }
});
