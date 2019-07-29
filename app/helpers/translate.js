import helper from '@ember/component/helper';
import { inject as service } from '@ember/service'
import { observer } from '@ember/object'

export default helper.extend({
  intl: service(),
  onNewUser: observer('intl.locale', function() {
    this.recompute();
  }),
  compute([model, poperty, relation = 'translations']) {
    const translations = model.get(relation);
    const translation = translations.find(t => t.lang === this.intl.primaryLocale);
    return translation ? translation.get(poperty) : '';
  }
});
