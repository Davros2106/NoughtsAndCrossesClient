(function () {
    'use strict';
angular.module('noughtsAndCrossesApp')

.service('gameApi',['$http', 'gameModel', function($http, gameModel) {


    var GameApi = function () {


        var callService= function (url, data){
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

                });
        };


        this.newGame = function() {
            return callService('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                {'player1': 'random', 'player2': 'random'});


        };


    };

    return new GameApi();



}]);

})();

