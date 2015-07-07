(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.gameApiProxy')
        .service('GameApiProxy', function ($q, $http, HTTP_CONSTANTS) {
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
                    return callService(HTTP_CONSTANTS.newGameUrl,
                        {'player1': player1Type, 'player2': player2Type});
                };
                this.makeMove = function (currentPlayer, chosenSquare) {
                    return callService(HTTP_CONSTANTS.makeMoveUrl,
                        {'playerNumber': currentPlayer, 'chosenSquare': chosenSquare});
                };
            };
            return new GameApi();
        });
})();

