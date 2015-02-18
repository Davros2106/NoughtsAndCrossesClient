(function() {
 'use strict';

 describe('Testing the Game-Api-Proxy', function () {

     beforeEach(function(){
         module(function($provide){
             $provide.value('gameConstants', MockGameConstants);
         });
     });

       var MockGameConstants;
       var $httpBackend;
       var gameApiProxy;


        beforeEach(function () {
        module('tombola.noughtsAndCrosses.providers.gameApiProxy');
        inject(function($injector) {
             $httpBackend = $injector.get('$httpBackend');
             gameApiProxy = $injector.get('gameApiProxy');

             });
        });

     it('Start new game and set Human vs Human',function(){

           $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',{'player1': 'human', 'player2': 'human'})
               .respond({"outcome":"Win","gameboard":"122110120","winner":"1"});

            gameApiProxy.newGame('human','human')
                .then(function(data){
                    expect(data.gameboard).to.equal('122110120');
                    expect(data.winner).to.equal('1');
                    expect(data.outcome).to.equal('Win');
                });
            $httpBackend.flush();
        });

        it('Start new game and set Random vs Human',function(){

           $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',{'player1': 'random', 'player2': 'human'})
             .respond({"outcome":"Draw","gameboard":"121221112","winner":0});

            gameApiProxy.newGame('random','human')
             .then(function(data){
                 expect(data.gameboard).to.equal('121221112');
                 expect(data.winner).to.equal(0);
                 expect(data.outcome).to.equal('Draw');
             });
            $httpBackend.flush();
        });

        it('Start new game and set Random vs Random',function(){

           $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',{'player1': 'random', 'player2': 'random'})
             .respond({"outcome":"Win","gameboard":"102020211","winner":'2'});

            gameApiProxy.newGame('random','random')
             .then(function(data){
                 expect(data.gameboard).to.equal('102020211');
                 expect(data.winner).to.equal('2');
                 expect(data.outcome).to.equal('Win');
             });
             $httpBackend.flush();
        });

        it('Start new game and set Random vs preTrained',function(){

           $httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',{'player1': 'random', 'player2': 'pre-trained'})
             .respond({"outcome":"Draw","gameboard":"211122211","winner":0});

            gameApiProxy.newGame('random','pre-trained')
             .then(function(data){
                 expect(data.gameboard).to.equal('211122211');
                 expect(data.winner).to.equal(0);
                 expect(data.outcome).to.equal('Draw');
             });
         $httpBackend.flush();
     });


    });


 })();