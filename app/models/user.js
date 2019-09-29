import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    validatePath: '/users/validate',

    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    password: DS.attr('string')
});
