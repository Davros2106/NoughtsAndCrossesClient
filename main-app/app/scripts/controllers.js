(function () {
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('NoughtsAndCrossesController',
        ['$scope', 'GameApiProxy', 'GameModel', 'AudioService', function ($scope, GameApiProxy, GameModel,
                                                                          AudioService) {
            $scope.GameModel = GameModel;
            $scope.newGame = function () {
                updateGameModel(GameApiProxy.newGame($scope.GameModel.player1Type, $scope.GameModel.player2Type));
                GameModel.startingPlayers();
            };
            $scope.makeMove = function (chosenSquare) {
                updateGameModel(GameApiProxy.makeMove($scope.GameModel.currentPlayer, chosenSquare));
                GameModel.changeCurrentPlayer();
                AudioService.makeMove();
            };
            var updateGameModel = function (promise) {
                promise.then(function (data) {
                    $scope.GameModel.updateModel(data);
                }, function () {
                    console.log('ERROR');
                });
            };
        }]);
})();