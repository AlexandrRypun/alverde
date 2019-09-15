import Component from '@ember/component';
import jq from 'jquery';
import constants from 'alverde/utils/constants';

export default Component.extend({
    classNames: ['main-menu', 'display-inline'],
    showMenu: true,
    didInsertElement() {
        // jq('.main-menu nav').meanmenu({
        //     meanScreenWidth: "991",
        //     meanMenuContainer: '.mobile-menu'
        // });

       this.showHideMenu();
        jq(window).resize( () => {
            this.showHideMenu();
        });
    },

    showHideMenu() {
        const currentWidth = window.innerWidth || document.documentElement.clientWidth;
        this.set('showMenu', currentWidth > constants.mobileMenuWidth);
    }
});
