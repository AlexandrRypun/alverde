import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    price: DS.attr('number'),
    quantity: DS.attr('number'),
    order: DS.belongsTo('order'),
    product: DS.belongsTo('product')
});
