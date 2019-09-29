'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'bemiracle',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      api: {
        host: ''
      }
    },
    'ember-simple-auth-token': {
      serverTokenEndpoint: 'http://api.bemiracle.hz/login',
      refreshAccessTokens: false,
      tokenPropertyName: 'token', // Key in server response that contains the access token
      headers: {
        'Content-Type': 'application/vnd.api+json'
      }
    }
  };

  if (environment === 'development') {
      ENV.APP.api.host = 'http://api.bemiracle.hz';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
