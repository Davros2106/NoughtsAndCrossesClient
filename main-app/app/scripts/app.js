var noughtsAndCrossesApp = angular.module('noughtsAndCrossesApp', []);

noughtsAndCrossesApp.factory('gameModel', function() {

return {
    outcome: 'continue',
    gameState: '000000000',
    winner: '0'

       };

}
    );






