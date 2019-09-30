import DS from 'ember-data';
import AppModel from './application';

export default AppModel.extend({
    validatePath: '/categories/validate',

    translations: DS.hasMany('categoryTranslation'),
    products: DS.hasMany('product')
});
