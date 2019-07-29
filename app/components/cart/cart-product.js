import Component from '@ember/component';

export default Component.extend({
    tagName: 'tr',
    actions: {
        changeProdQty(increase) {
            if (increase) {
                this.cartProduct.incrementProperty('cartQuantity');
            } else {
                if (this.cartProduct.cartQuantity > 1) {
                    this.cartProduct.decrementProperty('cartQuantity');
                }
            }
        }
    }
});
