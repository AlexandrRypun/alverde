import DS from 'ember-data';
import AppModel from './application';

export default AppModel.extend({
    src: DS.attr('string'),
    main: DS.attr('boolean'),
    productId: DS.attr('number'),
});
