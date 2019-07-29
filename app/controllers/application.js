import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
    cart: service(),

    cartProductsQty: computed('cart.products.length', function() {
        return this.cart.products ? this.cart.products.length : 0;
    })
});
