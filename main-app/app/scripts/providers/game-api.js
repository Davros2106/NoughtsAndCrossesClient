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


        this.newGame = function (player1Type, player2Type) {
            return callService('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                {'player1': player1Type, 'player2': player2Type });


        };

        this.makeMove = function (chosenSquare) {

            return callService('http://eutaveg-01.tombola.emea:35000/api/v1.0/makeMove',
                {'playerNumber': gameModel.currentPlayer, 'chosenSquare': chosenSquare});

        };

    };

    return new GameApi();



}]);

})();

