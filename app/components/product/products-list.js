import Component from '@ember/component';
import { observer } from '@ember/object';
import jq from 'jquery';

export default Component.extend({
    classNames: ['shop-style-all', 'mt-50'],
    reCalculatePagination: true,
    prodsObs: observer('products.[]', function prodsObs() {
        this.replaceProducts();
        this.toggleProperty('reCalculatePagination');
    }),
    didInsertElement() {
        this.replaceProducts();
    },
    replaceProducts() {
        jq('.grid').imagesLoaded( function() {
            const grid = jq('.grid');
            if (jq('.grid').data('isotope')) {
                grid.isotope('reloadItems')
            }
            grid.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }
});
