import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    price: DS.attr('number'),
    description: DS.attr('string'),
    img_teaser: DS.attr('string'),
    category: DS.belongsTo('category'),

    // Additional properties
    cartQuantity: DS.attr('number', { defaultValue: 0 })
});
