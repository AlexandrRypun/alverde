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
});

export default Router;
