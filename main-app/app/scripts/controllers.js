(function () {
angular.module('noughtsAndCrossesApp')

    .controller('noughtsAndCrossesController', ['$scope','gameApi', function ($scope,gameApi,gameModel){

    $scope.data ={};

        $scope.gameModel = gameModel;

$scope.newGame = function() {
    $scope.data = gameApi.newGame();
};

}]);

})();






