(function() {
    'use strict';

    describe('Testing the controller', function () {

        var scope;
        var controller;
        var sandbox;
        var q;

        var gameModelMock;
        var audioServiceMock;


        beforeEach(module('tombola.noughtsAndCrosses'));

        beforeEach(inject(function($rootScope, $controller, $q){

            q = $q;
            sandbox = sinon.sandbox.create();
            gameModelMock = sinon.sandbox.mock(mocks.gameModel);
            audioServiceMock = sinon.sandbox.mock(mocks.audioService);

            scope = $rootScope.$new();

            controller = $controller('noughtsAndCrossesController', {
                $scope: scope,
                gameModel: mocks.gameModel,
                gameApiProxy: mocks.gameApiProxy,
                audioService: mocks.audioService
            });

        }));

        it('Check reset calls the newGame function', function(){
            var testResult = {winner: '2', gameboard:'22222222'};

            mocks.gameApiProxy.newGame = function(){
                return q.when(testResult);
            };

            gameModelMock
                .expects('updateModel')
                .withArgs(testResult)
                .once();

            gameModelMock
                .expects('startingPlayers')
                .once();


            scope.newGame();
        });

        it('Check reset calls the makeMove function', function(){
            var testResult = {winner: '0', gameboard:'100000000'};

            mocks.gameApiProxy.makeMove = function(){
                return q.when(testResult);
            };

            gameModelMock
                .expects('updateModel')
                .withArgs(testResult)
                .once();

            gameModelMock
                .expects('changeCurrentPlayer')
                .once();

            audioServiceMock
                .expects('audioMakeMove')
                .once();


            scope.makeMove();
        });

        afterEach(function () {
            scope.$digest();
            gameModelMock.verify();
            audioServiceMock.verify();
            sandbox.restore();
        });

    });

})();
