(function () {
angular.module('tombola.noughtsAndCrosses')
    .controller('noughtsAndCrossesController', ['$scope','gameApi', 'gameModel', function ($scope,gameApi,gameModel){

        $scope.gameModel = gameModel;
        console.log ($scope.gameModel);

        $scope.newGame = function() {
            gameApi.newGame(gameModel.player1Type, gameModel.player2Type);
        };

        $scope.makeMove = function (chosenSquare) {
            gameApi.makeMove(chosenSquare);
            gameModel.changeCurrentPlayer();

        };

        var updateModel = {}; //TODO: need to create an update .then //

    }]);
})();






