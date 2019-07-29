import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
    classNames: ['cart-table-area section-padding-100'],
    cart: service(),
    totalSum: computed('cart.products.@each.cartQuantity', function() {
        return this.cart.products ? this.cart.products.reduce((sum, p) => sum + p.price * p.cartQuantity, 0) : 0;
    })
});
