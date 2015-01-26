(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrosses')

        .directive('gameSquare', function () {
            return {
                restrict: 'E',
                replace: true,
                template: function (scope, attr) {

                    return '<div class="gameCell showImg{{gameModel.gameboard[' +attr.cellnumber+ ']}}" ng-click="makeMove(' +attr.cellnumber+ ')"></div>';
                }

            };

        });
})();