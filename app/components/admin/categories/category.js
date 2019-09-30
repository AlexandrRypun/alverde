import Component from '@ember/component';

export default Component.extend({
    actions: {
        onAttrChanged(attrName) {
            this.category.validate([attrName]);
        }
    }
});
