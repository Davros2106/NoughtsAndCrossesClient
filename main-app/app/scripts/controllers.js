(function () {
angular.module('noughtsAndCrossesApp')

    .controller('noughtsAndCrossesController', ['$scope','gameApi', 'gameModel', function ($scope,gameApi,gameModel){

$scope.data = {};
$scope.gameApi = gameApi;
        $scope.gameModel = gameModel;



$scope.newGame = function() {
    $scope.data = gameApi.newGame($scope.player1, $scope.player2);

    $scope.makeMove = function(chosenSquare) {
        $scope.data = gameApi.makeMove($scope.currentPlayer, chosenSquare);
        $scope.data = gameModel.changeCurrentPlayer();
    };


};


}]);

})();






