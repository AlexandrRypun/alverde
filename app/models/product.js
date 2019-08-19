import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
    price: DS.attr('number'),
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
