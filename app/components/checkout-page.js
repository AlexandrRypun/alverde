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
        let price = 0;
        this.cart.products.forEach(product => {
            orderProducts.pushObject(this.store.createRecord('order-product', {
                productId: product.id,
                price: product.price,
                quantity: product.cartQuantity,
                product
            }));
            price += product.price * product.cartQuantity;
        });
        const order = this.store.createRecord('order', {
            status: 'W',
            products: orderProducts,
            price
        });
        this.set('order', order);
    },

    actions: {
        onAttrChanged(attrName) {
            this.order.validate([attrName]);
        },
        saveOrder() {
            this.order.save();
        }
    }
});
