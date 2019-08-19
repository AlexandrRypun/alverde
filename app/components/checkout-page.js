import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Component.extend({
    classNames: ['checkout-area', 'ptb-100'],
    store: service(),
    cart: service(),

    init(...args) {
        this._super(args);
        const orderProducts = A();
        let totalSum = 0;
        this.cart.products.forEach(product => {
            orderProducts.pushObject(this.store.createRecord('order-product', {
                price: product.price,
                quantity: product.cartQuantity,
                product
            }));
            totalSum += product.price * product.cartQuantity;
        });
        const order = this.store.createRecord('order', {
            status: 1,
            products: orderProducts,
            totalSum
        });
        this.set('order', order);
    },

    actions: {
        saveOrder() {
        }
    }
});
