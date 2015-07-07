(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.gameModel')
        .constant('GAME_CONSTANTS', {
            startingGameboard: '000000000',
            defaultPlayer1Type: 'human',
            defaultPlayer2Type: 'random'
        });
})();
