import Component from '@ember/component';
import { observer } from '@ember/object';
import jq from 'jquery';

export default Component.extend({
    tagName: '',
    showModal: false,
    domReady: false,
    onShowModal: observer('showModal', function() {
        if (this.domReady) {
            jq(`#${this.modalId}`)[this.showModal ? 'show' : 'hide'](300);
        }
    }),
    didInsertElement() {
        this.set('domReady', true);
    },
    actions: {
        closeModal() {
            this.set('showModal', false);
        }
    }
});
