(function () {
        'use strict';
angular.module('tombola.noughtsAndCrosses.providers.gameModel')

.service('gameModel', function(gameConstants) {

        this.outcome = 'continue';
        this.gameboard = gameConstants.startingGameboard;
        this.winner = 0;
        this.currentPlayer = 1;
        this.player1Type = gameConstants.defaultPlayer1Type;
        this.player2Type = gameConstants.defaultPlayer2Type;


        this.changeCurrentPlayer = function(){
            var me = this;


            if(me.player1Type !== 'human') {
                return;
            }
            if(me.player2Type !== 'human') {
                return;
            }
            me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;

        };


        this.startingPlayers = function(){

            var me = this;

            if(me.player1Type === 'human') {
                this.currentPlayer = 1;
            }


            else if (me.player2Type === 'human') {
                this.currentPlayer = 2;
            }

        };

        this.updateModel = function(data){

            var me = this;

            me.outcome = data.outcome;
            me.winner = data.winner;
            me.gameboard = data.gameboard;

        };

        this.getResultSprite = function() {

           if(this.winner === '1'){
               return this.winner;
           }
           else if(this.outcome === 'Draw'){
               return('3');
           }
           else{
               return this.winner;
           }

        };

    });

})();
