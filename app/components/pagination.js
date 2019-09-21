import Component from '@ember/component';
import { computed } from '@ember/object';
import constants from 'bemiracle/utils/constants';

export default Component.extend({
    classNames: ['pagination-block'],
    page: 1,
    buttons: computed('page', 'reCalculatePagination', function() {
        const paginationPageButtons = this.pageButtons || constants.paginationPageButtons;
        const buttonsOnOneSide = Math.floor((paginationPageButtons - 1) / 2);
        const totalPages = Math.ceil(this.totalItems / this.perPage);
        const buttons = [];
        const startButton = this.page > buttonsOnOneSide ? this.page - buttonsOnOneSide : 1;
        const endButton = totalPages > this.page + buttonsOnOneSide ? this.page + buttonsOnOneSide : totalPages;
        if (this.page > 1) {
            buttons.push({
                page: 1,
                name: '<<'
            }, {
                page: this.page - 1,
                name: '<'
            });
        }
        for (let i = startButton; i <= endButton; i += 1) {
            buttons.push({
                page: i,
                name: i
            });
        }
        if (this.page < totalPages) {
            buttons.push({
                page: this.page + 1,
                name: '>'
            }, {
                page: totalPages,
                name: '>>'
            });
        }

        return buttons;
    }),

    actions: {
        goToPage(page) {
            this.set('page', page);
        }
    }
});
