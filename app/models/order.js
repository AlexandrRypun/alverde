import DS from 'ember-data';
import AppModel from './application';

export default AppModel.extend({
    validatePath: '/orders/validate',

    status: DS.attr('string'),
    paymentMethod: DS.attr('string'),
    customerName: DS.attr('string'),
    customerSurname: DS.attr('string'),
    customerEmail: DS.attr('string'),
    customerPhone: DS.attr('string'),
    customerAddress: DS.attr('string'),
    customerNPDepartment: DS.attr('string'),
    products: DS.hasMany('order-product'),
    price: DS.attr('number')
});
