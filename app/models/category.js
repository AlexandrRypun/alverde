import DS from 'ember-data';
import AppModel from './application';

export default AppModel.extend({
    name: DS.attr('string'),
    products: DS.hasMany('product')
});
