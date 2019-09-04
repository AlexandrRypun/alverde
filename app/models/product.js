import DS from 'ember-data';
import { computed } from '@ember/object';
import AppModel from './application';

export default AppModel.extend({
    validatePath: '/products/validate',

    price: DS.attr('number'),
    oldPrice: DS.attr('number'),
    category: DS.belongsTo('category'),
    images: DS.hasMany('productImage'),
    translations: DS.hasMany('productTranslation'),

    mainImg: computed('images.[]', function() {
        const mainImg = this.images.find(i => i.main);
        return mainImg ? mainImg.src : '';
    }),

    // Additional properties
    cartQuantity: DS.attr('number', { defaultValue: 0 })
});
