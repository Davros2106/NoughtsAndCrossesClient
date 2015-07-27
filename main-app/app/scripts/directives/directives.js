(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.directives')
        .directive('gameSquare', function () {
            return {
                restrict: 'E',
                replace: true,
                template: function (scope, attr) {
                    return '<div class="gameCell showImg{{GameModel.gameboard[' + attr.cellnumber + ']}}" ng-click="makeMove(' + attr.cellnumber + ')">';
                }
            };
        })
        .directive('gameResult', function () {
            return {
                restrict: 'E',
                replace: true,
                template: function () {
                    return '<div class="resultDisplay showResult{{GameModel.getResultSprite()}}">';
                }
            };
        });
})();