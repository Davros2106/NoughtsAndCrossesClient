(function () {
angular.module('tombola.noughtsAndCrosses')
    .controller('noughtsAndCrossesController', ['$scope','gameApi', 'gameModel', function ($scope,gameApi,gameModel){

        $scope.gameModel = gameModel;
        console.log ($scope.gameModel);

        $scope.newGame = function() {
            gameApi.newGame(gameModel.player1Type, gameModel.player2Type);
            gameModel.startingPlayers();
        };

        $scope.makeMove = function (chosenSquare) {
            gameApi.makeMove(chosenSquare);
            gameModel.changeCurrentPlayer();

        };

        $scope.updateModel = function(promise){
            promise.then(function(data) {

                $scope.gameModel.updateModel(data);

            }, function(err) {

                console.log(err);

            });

        };

    }]);
})();






