(function () {
        'use strict';
angular.module('tombola.noughtsAndCrosses')

.service('gameModel', function() {

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.currentPlayer = 1;
        this.player1Type = 'human';
        this.player2Type = 'human';


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

    });
})();
