import DS from 'ember-data';
import AppModel from './application';

export default AppModel.extend({
    productId: DS.attr('number'),
    price: DS.attr('number'),
    quantity: DS.attr('number'),
    order: DS.belongsTo('order'),
    product: DS.belongsTo('product')
});
