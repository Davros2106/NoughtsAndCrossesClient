(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.gameApiProxy')
        .constant('HTTP_CONSTANTS', {
            newGameUrl: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
            makeMoveUrl: 'http://eutaveg-01.tombola.emea:35000/api/v1.0/makeMove'
        });
})();