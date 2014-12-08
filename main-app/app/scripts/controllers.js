noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope, $http, gameModel){

$scope.gameModel = gameModel;


$scope.StartNewGame = function() {
    gameModel.StartNewGame();
};

$scope.makeMove = function() {
    gameModel.makeMove();
};


});



