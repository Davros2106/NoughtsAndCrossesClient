(function () {
    'use strict';
    describe('Testing the controller', function () {
        var scope,
            controller,
            sandbox,
            q,
            GameModelMock,
            AudioServiceMock;
        beforeEach(module('Tombola.NoughtsAndCrosses'));
        beforeEach(inject(function ($rootScope, $controller, $q) {
            q = $q;
            sandbox = sinon.sandbox.create();
            GameModelMock = sinon.sandbox.mock(mocks.GameModel);
            AudioServiceMock = sinon.sandbox.mock(mocks.AudioService);
            scope = $rootScope.$new();
            controller = $controller('NoughtsAndCrossesController', {
                $scope: scope,
                GameModel: mocks.GameModel,
                GameApiProxy: mocks.GameApiProxy,
                AudioService: mocks.AudioService
            });
        }));
        it('Check reset calls the newGame function', function () {
            var testResult = {winner: '2', gameboard: '22222222'};
            mocks.GameApiProxy.newGame = function () {
                return q.when(testResult);
            };
            GameModelMock
                .expects('updateModel')
                .withArgs(testResult)
                .once();
            GameModelMock
                .expects('startingPlayers')
                .once();
            scope.newGame();
        });
        it('Check reset calls the makeMove function', function () {
            var testResult = {winner: '0', gameboard: '100000000'};

            mocks.GameApiProxy.makeMove = function () {
                return q.when(testResult);
            };
            GameModelMock
                .expects('updateModel')
                .withArgs(testResult)
                .once();
            GameModelMock
                .expects('changeCurrentPlayer')
                .once();
            AudioServiceMock
                .expects('makeMove')
                .once();
            scope.makeMove();
        });
        afterEach(function () {
            scope.$digest();
            GameModelMock.verify();
            AudioServiceMock.verify();
            sandbox.restore();
        });
    });
})();
