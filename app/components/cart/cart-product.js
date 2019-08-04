import Component from '@ember/component';

export default Component.extend({
    tagName: 'tr',
    actions: {
        removeProduct(product) {
           this.onRemoveProduct(product);
        }
    }
});
