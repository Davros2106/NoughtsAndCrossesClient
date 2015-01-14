(function () {
    'use strict';
angular.module('tombola.noughtsAndCrosses')

.service('gameApi',function($q, $http, gameModel) {
        console.log($q);

    var GameApi = function () {
        console.log('******Get Data Start******');

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

            var deferred = $q.defer();


            $http(serverPost)
                .success(function (data) {
                    console.log('******Data returned: Success******');
                    deferred.resolve(data);
                    gameModel.gameboard = data.gameboard;
                    gameModel.winner = data.winner;


                })
                .error(function (data, status) {
                    deferred.reject();
                    console.log('data: ' + data);
                    console.log('status: ' + status);
                    console.log('******Data returned: Failed******');

                });
                    console.log('******Get Data End******');

            return deferred.promise;
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



});

})();

