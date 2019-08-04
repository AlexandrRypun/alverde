import Component from '@ember/component';
import jq from 'jquery';

export default Component.extend({
    classNames: ['main-menu', 'display-inline'],
    didInsertElement() {
        jq('.main-menu nav').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: '.mobile-menu'
        });
    }
});
