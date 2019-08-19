import Component from '@ember/component';
import jq from 'jquery';

export default Component.extend({
    classNames: ['page-section', 'section', 'ptb-100'],
    didInsertElement() {
        jq('.slider-active').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        jq('.pro-thumb-img-slider').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 5,
            dots: false,
            margin: 25,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        jq('.testimonial-active').owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    },
    actions: {
        addToCart(product) {
            this.onAddToCart(product);
        }
    }
});
