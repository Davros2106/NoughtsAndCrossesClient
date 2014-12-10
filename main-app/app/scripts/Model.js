(function () {
        'use strict';
angular.module('noughtsAndCrossesApp')

.service('gameModel', ['gameApi', function(gameApi) {

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
    }]);
})();















