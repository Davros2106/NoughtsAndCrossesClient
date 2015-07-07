(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.providers.gameApiProxy')
        .constant('httpConstants', {
            newGameUrl: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
            makeMoveUrl: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makeMove'
        });
})();