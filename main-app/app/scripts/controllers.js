(function () {
angular.module('tombola.noughtsAndCrosses')
    .controller('noughtsAndCrossesController', ['$scope','gameApi', 'gameModel', function ($scope,gameApi,gameModel){

        $scope.gameModel = gameModel;
        console.log ($scope.gameModel);

        $scope.newGame = function() {
            gameModel.newGame();
        };

        $scope.makeMove = function (chosenSquare) {
            gameModel.makeMove();

        };
    }]);
})();






