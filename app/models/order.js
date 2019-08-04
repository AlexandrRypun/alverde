import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    status: DS.attr('number'),
    payment_method: DS.attr('number'),
    user_name: DS.attr('string'),
    user_surname: DS.attr('string'),
    user_email: DS.attr('string'),
    user_phone: DS.attr('string'),
    user_address_1: DS.attr('string'),
    user_address_2: DS.attr('string'),
    products: DS.hasMany('order-product'),

    // Additional properties
    totalSum: DS.attr('number')
});
