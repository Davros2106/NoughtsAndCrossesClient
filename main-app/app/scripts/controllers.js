(function () {
angular.module('noughtsAndCrossesApp')

    .controller('noughtsAndCrossesController', ['$scope','gameApi', 'gameModel', function ($scope,gameApi,gameModel){

$scope.data = {};

        $scope.gameModel = gameModel;



$scope.newGame = function() {
    $scope.data = gameApi.newGame();

    $scope.makeMove = function() {
        $scope.data = gameApi.makeMove($scope.playerNumber, $scope.chosenSquare);
    };

};


}]);

})();






