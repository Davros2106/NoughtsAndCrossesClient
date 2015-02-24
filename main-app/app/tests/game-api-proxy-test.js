(function() {
 'use strict';

 describe('Testing the Game-Api-Proxy', function () {

     beforeEach(function () {
         module(function ($provide) {
             $provide.constant('gameConstants', mocks.gameConstants);
             $provide.constant('$httpConstants', mocks.httpConstants);
         });
     });
     var $httpBackend;
     var gameApiProxy;


     beforeEach(function () {
         module('tombola.noughtsAndCrosses.providers.gameApiProxy');
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
             });
         $httpBackend.flush();
     });

     it('Start new game and set Random vs Human', function () {

         $httpBackend.expectPOST(mocks.httpConstants.makeMoveUrl, {
             chosenSquare: 2,
             playerNumber: 2
         })
             .respond({"outcome": "Draw", "gameboard": "121221112", "winner": 0});

         gameApiProxy.makeMove(2, 2)
             .then(function (data) {
                 expect(data.gameboard).to.equal('121221112');
                 expect(data.winner).to.equal(0);
                 expect(data.outcome).to.equal('Draw');
             });
         $httpBackend.flush();
     });


     afterEach(function () {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
     });

 });


 })();