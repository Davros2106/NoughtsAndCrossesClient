noughtsAndCrossesApp.controller('noughtsAndCrossesController', function ($scope, $http, gameModel){

$scope.gameModel = gameModel;

    var serverPost = {

        method: 'POST',
        url: '',
        'withCredentials': 'true',
        headers: {
            'content-type': 'application/json'
        },
        data: '',
    };

    $scope.newGame = function () {
         serverPost.url = 'http://tictactoe1.cloudapp.net:35002/api/v1.0/newgame';
         serverPost.data = {'player1':'human', 'player2':'human'};
         $http(serverPost).
            success(function (data) {
               $scope.gameModel = data;
             });
    };


});

