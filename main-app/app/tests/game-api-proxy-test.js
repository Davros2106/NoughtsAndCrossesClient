(function () {
    'use strict';
    describe('Testing the Game-Api-Proxy', function () {
        var $httpBackend,
            GameApiProxy;
        beforeEach(function () {
            module('Tombola.NoughtsAndCrosses.Providers.gameApiProxy');
            module(function ($provide) {
                $provide.constant('HTTP_CONSTANTS', mocks.HTTP_CONSTANTS);
            });
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                GameApiProxy = $injector.get('gameApiProxy');
            });
        });
        it('Start new game and set Human vs Human', function () {
            $httpBackend.expectPOST(mocks.HTTP_CONSTANTS.makeMoveUrl, {
                'playerNumber': '1',
                'chosenSquare': 0
            })
                .respond({"outcome": "Continue", "gameboard": "102000000", "winner": 0});
            GameApiProxy.makeMove('1', 0)
                .then(function (data) {
                    expect(data.gameboard).to.equal('102000000');
                    expect(data.winner).to.equal(0);
                    expect(data.outcome).to.equal('Continue');
                })
                .catch(function (data) {
                    assert.fail('Unexpected bad response from back end' + data);
                });
            $httpBackend.flush();
        });
        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();