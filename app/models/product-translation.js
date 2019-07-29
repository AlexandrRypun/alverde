import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    product_id: DS.attr('number'),
    lang: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string')
});
