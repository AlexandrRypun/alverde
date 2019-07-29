import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    price: DS.attr('number'),
    img_teaser: DS.attr('string'),
    category: DS.belongsTo('category'),
    translations: DS.hasMany('productTranslation'),

    // Additional properties
    cartQuantity: DS.attr('number', { defaultValue: 0 })
});
