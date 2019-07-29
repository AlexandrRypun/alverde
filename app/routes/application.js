import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    intl: service(),
    beforeModel(...args) {
        this._super(args);
        const lang = localStorage.getItem('lang');
        return this.intl.setLocale(lang || 'ua-ua');
    }
});
