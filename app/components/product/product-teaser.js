import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import constants from 'alverde/utils/constants';

export default Component.extend({
    classNames: ['grid-item', 'col-sm-6', 'col-xs-12'],
    classNameBindings: ['customWidth'],
    customWidth: computed('index', function() {
        const scheme = constants.productsScheme[this.qty];
        const num = scheme === undefined || !scheme.includes(this.index) ? 3 : 6;
        return `col-md-${num}`;
    }),
    cart: service(),
    actions: {
        addToCart(product) {
            this.cart.add(product);
        }
    }
});
