(function () {
angular.module('tombola.noughtsAndCrosses')
    .controller('noughtsAndCrossesController', ['$scope','gameApi', 'gameModel', function ($scope,gameApi,gameModel){

        $scope.gameModel = gameModel;

        $scope.newGame = function() {
            updateGameModel(gameApi.newGame(gameModel.player1Type, gameModel.player2Type));
            gameModel.startingPlayers();
        };

        $scope.makeMove = function (chosenSquare) {
           updateGameModel(gameApi.makeMove(chosenSquare));
            gameModel.changeCurrentPlayer();
        };

        var updateGameModel = function(promise){
            promise.then(function(data) {
                $scope.gameModel.updateModel(data);
            }, function() {
                console.log('ERROR');
            });

        };

    }]);
})();






