(function () {
        'use strict';
angular.module('noughtsAndCrossesApp')

.service('gameModel', function() {
        var model = function () {

            this.outcome = 'continue';
            this.gameboard = '000000000';
            this.winner = 0;
            this.currentPlayer = 1;

        };

        this.changeCurrentPlayer = function(){
            var me = this;

            if(me.player1 !== 'human') {
                return;
            }
            if(me.player2 !== 'human') {
                return;
            }
            me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;

        };


        return model;


    });
})();
