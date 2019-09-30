import DS from 'ember-data';
import AppModel from './application';

export default AppModel.extend({
    categorytId: DS.attr('number'),
    lang: DS.attr('string'),
    name: DS.attr('string')
});
