(function () {
    'use strict';
angular.module('tombola.noughtsAndCrosses')

.service('gameApi',function($q, $http, gameModel) {


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

            var deferred = $q.defer();


            $http(serverPost)
                .success(function (data) {

                    deferred.resolve(data);

                })
                .error(function (data, status) {
                    deferred.reject();
                    console.log('data: ' + data);
                    console.log('status: ' + status);


                });


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

