import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    src: DS.attr('string'),
    main: DS.attr('boolean'),
    product_id: DS.attr('number'),
});
