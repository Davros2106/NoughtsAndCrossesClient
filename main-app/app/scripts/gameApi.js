(function () {
    'use strict';
angular.module('noughtsAndCrossesApp')

.service('gameApi',['$http', function($http) {


    var GameApi = function () {
        var me = this;


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
                    return data;

                });
        };


        me.newGame = function(){
            return callService('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                {'player1': 'random', 'player2': 'random'});

        };


    };

    return new GameApi();



}]);

})();

