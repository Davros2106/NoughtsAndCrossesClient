(function () {
    'use strict';

    describe('testing the changeCurrentPlayer function.', function () {
        var GameModel;
        beforeEach(function () {
            module('Tombola.NoughtsAndCrosses.Providers.gameModel');
            module(function ($provide) {
                $provide.value('GAME_CONSTANTS');
            });
            inject(function ($injector) {
                GameModel = $injector.get('gameModel');
            });
        });
        it('Testing a human vs human game with changeCurrentPlayer() ', function () {
            GameModel.currentPlayer = 1;
            GameModel.player1Type = 'human';
            GameModel.player2Type = 'human';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(2);
        });
        it('Testing a human vs human game with changeCurrentPlayer() ', function () {
            GameModel.currentPlayer = 2;
            GameModel.player1Type = 'human';
            GameModel.player2Type = 'human';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(1);
        });
        it('Testing a human vs random game with changeCurrentPlayer() ', function () {
            GameModel.player1Type = 'human';
            GameModel.player2Type = 'random';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(1);
        });
        it('Testing a human vs pre-trained game with changeCurrentPlayer() ', function () {
            GameModel.currentPlayer = 1;
            GameModel.player1Type = 'human';
            GameModel.player2Type = 'pre-trained';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(1);
        });
        it('Testing a pre-trained vs human game with changeCurrentPlayer() ', function () {
            GameModel.currentPlayer = 2;
            GameModel.player1Type = 'pre-trained';
            GameModel.player2Type = 'human';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(2);
        });
        it('Testing a random vs pre-trained game with changeCurrentPlayer() ', function () {
            GameModel.currentPlayer = 2;
            GameModel.player1Type = 'random';
            GameModel.player2Type = 'pre-trained';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(2);
        });
        it('Testing a pre-trained vs random game with changeCurrentPlayer() ', function () {
            GameModel.currentPlayer = 1;
            GameModel.player1Type = 'pre-trained';
            GameModel.player2Type = 'random';
            GameModel.changeCurrentPlayer();
            expect(GameModel.currentPlayer).to.equal(1);
        });
    });
    describe('testing updateModel', function () {
        var GameModel;
        beforeEach(function () {
            module('Tombola.NoughtsAndCrosses.Providers.gameModel');
            module(function ($provide) {
                $provide.value('GAME_CONSTANTS');
            });
            inject(function ($injector) {
                GameModel = $injector.get('GameModel');
            });
        });
        it(' Check updateModel on a draw condition', function () {
            var fakeData = {
                outcome: 'Draw',
                gameboard: '121112212',
                winner: 0
            };
            GameModel.updateModel(fakeData);
            expect(GameModel.winner).to.equal(fakeData.winner);
            expect(GameModel.outcome).to.equal(fakeData.outcome);
            expect(GameModel.gameboard).to.equal(fakeData.gameboard);
        });
        it(' Check updateModel on a win condition with player1', function () {
            var fakeData = {
                outcome: 'Win',
                gameboard: '1212121212',
                winner: 1
            };
            GameModel.updateModel(fakeData);
            expect(GameModel.winner).to.equal(fakeData.winner);
            expect(GameModel.outcome).to.equal(fakeData.outcome);
            expect(GameModel.gameboard).to.equal(fakeData.gameboard);
        });
        it(' Check updateModel on a win condition with player2', function () {
            var fakeData = {
                outcome: 'Win',
                gameboard: '212121212',
                winner: 2
            };
            GameModel.updateModel(fakeData);
            expect(GameModel.winner).to.equal(fakeData.winner);
            expect(GameModel.outcome).to.equal(fakeData.outcome);
            expect(GameModel.gameboard).to.equal(fakeData.gameboard);
        });
    });
})();