import Component from '@ember/component';
import jq from 'jquery';
import constants from 'alverde/utils/constants';

export default Component.extend({
    classNames: ['mean-bar'],
    classNameBindings: ['hidden'],
    hidden: false,
    opened: false,
    menuHtml: '<span></span><span></span><span></span>',
    didInsertElement() {
        this.showHideMenu();
        jq(window).resize( () => {
            this.showHideMenu();
        });
        const self = this;
        jq('.mobile-menu  .mean-nav li').on('click', function(e) {
            if (jq(this).hasClass('no-action')) {
                e.preventDefault();
            } else {
                self.send('openCloseMenu');
            }
        });
    },

    showHideMenu() {
        const currentWidth = window.innerWidth || document.documentElement.clientWidth;
        this.set('hidden', currentWidth > constants.mobileMenuWidth);
    },

    actions: {
        openCloseMenu() {
            const menu = jq('.mobile-menu .mean-nav ul:first');
            if (this.opened) {
                this.set('menuHtml', '<span></span><span></span><span></span>');
                menu.slideUp();
            } else {
                this.set('menuHtml', 'X');
                menu.slideDown();
            }
            this.toggleProperty('opened');
        },
        openCloseSubMenu() {
            const button = jq(event.target);
            const menu = button.parent().find('ul');
            if (button.hasClass('expanded')) {
                button.removeClass('expanded');
                button.text('+');
                menu.slideUp();
            } else {
                button.addClass('expanded');
                menu.slideDown();
                button.text('-');
            }
        }
    }
});
