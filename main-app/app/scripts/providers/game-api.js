(function () {
    'use strict';
angular.module('tombola.noughtsAndCrosses')

.service('gameApi',['$http', 'gameModel', function($http, gameModel) {


    var GameApi = function () {


        var callService = function (url, data) {
            var serverPost = {
                method: 'POST',
                url: url,
                data: data,
                'withCredentials': 'true',
                headers: {
                    'content-type': 'application/json'
                }
            };

            $http(serverPost)
                .success(function (data) {
                    gameModel.gameboard = data.gameboard;
                    gameModel.outcome = data.outcome;
                    gameModel.winner = data.winner;

                })
                .error(function (data) {
                    console.log('error');
                    console.log(data);

                });

        };


        this.newGame = function (player1, player2) {
            return callService('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                {'player1': player1, 'player2': player2 });


        };

        this.makeMove = function (currentPlayer, chosenSquare) {
            return callService('http://eutaveg-01.tombola.emea:35000/api/v1.0/makeMove',
                {'playerNumber': currentPlayer, 'chosenSquare': chosenSquare});

        };

    };

    return new GameApi();



}]);

})();

