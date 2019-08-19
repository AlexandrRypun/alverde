import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    cart: service(),
    actions: {
        onAddToCart(product) {
            this.cart.add(product);
        }
    }
});
