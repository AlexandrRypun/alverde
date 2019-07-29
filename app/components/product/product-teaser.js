import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['col-12', 'col-sm-6', 'col-md-12', 'col-xl-6'],

    cart: service(),
    actions: {
        addToCart(product) {
            this.cart.add(product);
        }
    }
});
