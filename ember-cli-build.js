'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/css/bootstrap.min.css');
  app.import('vendor/css/owl.carousel.css');
  app.import('vendor/css/pe-icon-7-stroke.css');
  app.import('vendor/css/font-awesome.min.css');
  app.import('vendor/css/meanmenu.css');
  app.import('vendor/css/shortcodes/bundle.css');
  app.import('vendor/css/shortcodes/header.css');
  app.import('vendor/css/shortcodes/slider.css');
  app.import('vendor/css/shortcodes/shop.css');
  app.import('vendor/css/shortcodes/footer.css');
  app.import('vendor/css/shortcodes/modal.css');
  app.import('vendor/css/shortcodes/shortcode.css');
  app.import('vendor/css/style.css');
  app.import('vendor/css/responsive.css');

  app.import('vendor/js/vendor/modernizr-2.8.3.min.js');
  app.import('vendor/js/vendor/jquery-1.12.0.min.js');
  app.import('vendor/js/bootstrap.min.js');
  app.import('vendor/js/jquery.meanmenu.js');
  app.import('vendor/js/isotope.pkgd.min.js');
  app.import('vendor/js/imagesloaded.pkgd.min.js');
  app.import('vendor/js/jquery.counterup.min.js');
  app.import('vendor/js/waypoints.min.js');
  // app.import('vendor/js/ajax-mail.js');
  app.import('vendor/js/owl.carousel.min.js');
  app.import('vendor/js/plugins.js');
  app.import('vendor/js/main.js');

  app.import('node_modules/chunk/src/chunk.js', {
    using: [
      { transformation: 'cjs', as: 'chunk' }
    ]
  });
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
