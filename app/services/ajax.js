import AjaxService from 'ember-ajax/services/ajax';
import config from 'alverde/config/environment';

export default AjaxService.extend({
    host: config.APP.api.host
});
