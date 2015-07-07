(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.providers.gameApiProxy')
        .service('gameApiProxy', function ($q, $http, httpConstants) {
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
                            var response = {
                                data: data,
                                status: status
                            };
                            deferred.reject(response);
                        });
                    return deferred.promise;
                };
                this.newGame = function (player1Type, player2Type) {
                    return callService(httpConstants.newGameUrl,
                        {'player1': player1Type, 'player2': player2Type});
                };
                this.makeMove = function (currentPlayer, chosenSquare) {
                    return callService(httpConstants.makeMoveUrl,
                        {'playerNumber': currentPlayer, 'chosenSquare': chosenSquare});
                };
            };
            return new GameApi();
        });
})();

