/*global describe:true, it:true, before:true, after:true */
'use strict';

var nemoFactory = require('nemo-mocha-factory'),
    plugins = require('../config/nemo-plugins'),
    flowCommon = require('../flow/common'),
    flowCard = require('../flow/card'),
    cardNumber,
    setup = {
        'user': {
            'us': {
                'country': 'US'
            }
        }
    };

describe('Nemo @addCardSuite@', function() {

    nemoFactory({
        'plugins': plugins,
        'setup': setup
    });
    before(function(done) {
        var creditCardData = {
            "country": "US",
            "cardType": "Visa",
            "currency": "USD"
        };
        flowCommon = flowCommon(nemo);
        flowCard = flowCard(nemo);
        nemo.creditcard.post(creditCardData, function(err, data) {
            if (!!err) {
                done(err);
            }
            if (data && data.cardType && data.cardType === 'Visa') {
                cardNumber = data.cardNumber;
                done();
            }
        });
    });
    beforeEach(function(done) {
        flowCommon.login(nemo.user.users.us.emailAddress, nemo.user.users.us.password).then(function() {
            done();
        })
    });
    afterEach(function(done) {
        flowCommon.logout().then(function() {
            done();
        })
    })
    it('will @addCard@', function(done) {
        flowCard.addSuccess(cardNumber, 'Misa').then(function(success) {
            if (success) {
                done();
            } else {
                done(new Error('had a problem adding the card'));
            }
        })
    });
    it('will @fail@addCard@', function(done) {
        flowCard.addFailure('1001001', 'Misa').then(function(failure) {
            if (failure) {
                done();
            } else {
                done(new Error('had a problem adding the card'));
            }
        })
    });
});
