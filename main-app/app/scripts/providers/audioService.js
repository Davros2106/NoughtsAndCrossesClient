(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses')

        .service('audioService',['$document', function($document) {

            var me = this;

            me.makeMove = function() {

                console.log('play makeMove sound');
            };


        }]);
})();