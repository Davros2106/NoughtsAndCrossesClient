(function () {
        'use strict';
angular.module('noughtsAndCrossesApp')

.service('gameModel', function() {
        var model = function () {

            this.outcome = 'continue';
            this.gameboard = '000000000';
            this.winner = 0;

        };

        return model;


    });
})();
