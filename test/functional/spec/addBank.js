/*global describe:true, it:true, before:true, after:true */
'use strict';

var nemoFactory = require('nemo-mocha-factory'),
  plugins = require('../config/nemo-plugins'),
  setup = {
    "view": ['']
  };

describe('Nemo @addBankSuite@', function() {

  nemoFactory({
    'plugins': plugins,
    'setup': setup
  });

  it('will @addBankTest@', function(done) {
    nemo.driver.get(nemo.props.targetBaseUrl);
    nemo.driver.sleep(1000).then(function() {
        done();
    }, function(err) {
      done(err);
    });
  });
});
