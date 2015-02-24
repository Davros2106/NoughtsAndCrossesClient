(function() {
 'use strict';

 describe('Testing the Game-Api-Proxy', function () {

     var $httpBackend;
     var gameApiProxy;

     beforeEach(function () {
         module('tombola.noughtsAndCrosses.providers.gameApiProxy');

         module(function ($provide) {
             $provide.constant('httpConstants', mocks.httpConstants);
         });

         inject(function ($injector) {
             $httpBackend = $injector.get('$httpBackend');
             gameApiProxy = $injector.get('gameApiProxy');

         });
     });

     it('Start new game and set Human vs Human', function () {

         $httpBackend.expectPOST(mocks.httpConstants.newGameUrl, {
                 'player1': 'human',
                 'player2': 'human'
            })
            .respond({"outcome": "Win", "gameboard": "122110120", "winner": "1"});

         gameApiProxy.newGame('human', 'human')
             .then(function (data) {
                 expect(data.gameboard).to.equal('122110120');
                 expect(data.winner).to.equal('1');
                 expect(data.outcome).to.equal('Win');
             })
             .catch( function(data){
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