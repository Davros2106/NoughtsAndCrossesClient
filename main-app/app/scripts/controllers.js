(function () {
angular.module('tombola.noughtsAndCrosses')
    .controller('noughtsAndCrossesController', ['$scope','gameApiProxy', 'gameModel','audioService', function ($scope,gameApiProxy,gameModel,audioService){

        $scope.gameModel = gameModel;

        $scope.newGame = function() {
            updateGameModel(gameApiProxy.newGame($scope.gameModel.player1Type, $scope.gameModel.player2Type));
            gameModel.startingPlayers();
        };

        $scope.makeMove = function (chosenSquare) {
           updateGameModel(gameApiProxy.makeMove($scope.gameModel.currentPlayer, chosenSquare));
            gameModel.changeCurrentPlayer();
            audioService.makeMove();
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






