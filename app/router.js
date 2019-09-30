import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-us');
  this.route('contacts');
  this.route('delivery');
  this.route('cart');
  this.route('products', function() {
    this.route('product', { path: '/:prod_id' });
  });
  this.route('checkout');
  this.route('profile');

  this.route('admin', function() {
    this.route('products', function() {
      this.route('product');
    });

    this.route('orders', function() {
      this.route('order');
    });

    this.route('users', function() {
      this.route('user');
    });

    this.route('categories', function() {
      this.route('category', { path: '/:cat_id'});
    });
  });
});

export default Router;
