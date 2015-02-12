(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.providers.gameModel')

        .constant('gameConstants',{

                outcome:'continue',
                gameboard:'000000000',
                winner:0,
                player1:'human',
                player2:'random',
                currentPlayer:1


        });

})();
