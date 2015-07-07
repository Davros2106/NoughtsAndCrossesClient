(function () {
    'use strict';

    describe('testing the changeCurrentPlayer function.', function () {
        var gameModel;
        beforeEach(function () {
            module('tombola.noughtsAndCrosses.providers.gameModel');
            module(function ($provide) {
                $provide.value('gameConstants');
            });
            inject(function ($injector) {
                gameModel = $injector.get('gameModel');
            });
        });
        it('Testing a human vs human game with changeCurrentPlayer() ', function () {
            gameModel.currentPlayer = 1;
            gameModel.player1Type = 'human';
            gameModel.player2Type = 'human';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(2);
        });
        it('Testing a human vs human game with changeCurrentPlayer() ', function () {
            gameModel.currentPlayer = 2;
            gameModel.player1Type = 'human';
            gameModel.player2Type = 'human';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });
        it('Testing a human vs random game with changeCurrentPlayer() ', function () {
            gameModel.player1Type = 'human';
            gameModel.player2Type = 'random';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });
        it('Testing a human vs pre-trained game with changeCurrentPlayer() ', function () {
            gameModel.currentPlayer = 1;
            gameModel.player1Type = 'human';
            gameModel.player2Type = 'pre-trained';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });
        it('Testing a pre-trained vs human game with changeCurrentPlayer() ', function () {
            gameModel.currentPlayer = 2;
            gameModel.player1Type = 'pre-trained';
            gameModel.player2Type = 'human';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(2);
        });
        it('Testing a random vs pre-trained game with changeCurrentPlayer() ', function () {
            gameModel.currentPlayer = 2;
            gameModel.player1Type = 'random';
            gameModel.player2Type = 'pre-trained';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(2);
        });
        it('Testing a pre-trained vs random game with changeCurrentPlayer() ', function () {
            gameModel.currentPlayer = 1;
            gameModel.player1Type = 'pre-trained';
            gameModel.player2Type = 'random';
            gameModel.changeCurrentPlayer();
            expect(gameModel.currentPlayer).to.equal(1);
        });
    });
    describe('testing updateModel', function () {
        var gameModel;
        beforeEach(function () {
            module('tombola.noughtsAndCrosses.providers.gameModel');
            module(function ($provide) {
                $provide.value('gameConstants');
            });
            inject(function ($injector) {
                gameModel = $injector.get('gameModel');
            });
        });
        it(' Check updateModel on a draw condition', function () {
            var fakeData = {
                outcome: 'Draw',
                gameboard: '121112212',
                winner: 0
            };
            gameModel.updateModel(fakeData);
            expect(gameModel.winner).to.equal(fakeData.winner);
            expect(gameModel.outcome).to.equal(fakeData.outcome);
            expect(gameModel.gameboard).to.equal(fakeData.gameboard);
        });
        it(' Check updateModel on a win condition with player1', function () {
            var fakeData = {
                outcome: 'Win',
                gameboard: '1212121212',
                winner: 1
            };
            gameModel.updateModel(fakeData);
            expect(gameModel.winner).to.equal(fakeData.winner);
            expect(gameModel.outcome).to.equal(fakeData.outcome);
            expect(gameModel.gameboard).to.equal(fakeData.gameboard);
        });
        it(' Check updateModel on a win condition with player2', function () {
            var fakeData = {
                outcome: 'Win',
                gameboard: '212121212',
                winner: 2
            };
            gameModel.updateModel(fakeData);
            expect(gameModel.winner).to.equal(fakeData.winner);
            expect(gameModel.outcome).to.equal(fakeData.outcome);
            expect(gameModel.gameboard).to.equal(fakeData.gameboard);
        });
    });
})();