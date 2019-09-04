import DS from 'ember-data';
import config from 'alverde/config/environment';

export default DS.JSONAPIAdapter.extend({
    host: config.APP.api.host
});
