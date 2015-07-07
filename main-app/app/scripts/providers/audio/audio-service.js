(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.audio')
        .service('AudioService', function (AudioSprite) {
            var terminatorAudioSprite = new AudioSprite('audio/terminatorSprite.mp3', 'audio/mpeg');
            this.makeMove = function () {
                terminatorAudioSprite.playSprite(0, 3000);
            };
        });
})();