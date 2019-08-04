import Service from '@ember/service';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';

export default Service.extend({
    store: service(),

    productsObserver: observer('products.@each.cartQuantity', function() {
        this.saveToLocalStorage();
    }),

    async loadProducts() {
        const cartProducts = A();
        const savedCartProducts = localStorage.getItem('cartProducts');
        if (savedCartProducts) {
            const parsedSavedCartProducts = JSON.parse(savedCartProducts);
            const ids = Object.keys(parsedSavedCartProducts);
            if (ids.length > 0) {
                const products = await this.store.query('product', {id: Object.keys(parsedSavedCartProducts)});
                products.forEach(p => {
                    p.set('cartQuantity', Number(parsedSavedCartProducts[p.id].qty));
                    cartProducts.pushObject(p);
                });
            }
        }
        this.set('products', cartProducts);
    },

    add(product) {
        product.incrementProperty('cartQuantity');
        const existingProduct = this.products.find(p => p.id === product.id);
        if (existingProduct === undefined) {
            this.products.pushObject(product);
        }
    },

    remove(product) {
        this.products.removeObject(product);
    },

    empty() {
        this.products.clear();
    },

    saveToLocalStorage() {
        const cartProducts = {};
        this.products.forEach(p => {
            cartProducts[p.id] = {
                qty: p.cartQuantity
            };
        });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
});
