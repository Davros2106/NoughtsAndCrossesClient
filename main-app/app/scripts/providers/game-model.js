(function () {
        'use strict';
angular.module('tombola.noughtsAndCrosses')

.service('gameModel', function() {

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.currentPlayer = 1;
        this.player1Type = 'human';
        this.player2Type = 'random';

        var changeCurrentPlayer = function(){
            var me = this;

            if(me.player1Type !== 'human') {
                return;
            }
            if(me.player2Type !== 'human') {
                return;
            }
            me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;

        };


        this.newGame = function(){
            //TODO: intialise who is playing first
        //    updateBoard(gameApi.newGame(me.player1Type, me.player2Type));
        //}

        // this.makeMove //Also - change the current player....
    });
})();
