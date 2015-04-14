(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.providers.audio')
        .service('audioService', function(AudioSprite) {
            var terminatorAudioSprite = new AudioSprite('audio/terminatorSprite.mp3', 'audio/mpeg');
            this.makeMove = function() {
                terminatorAudioSprite.playSprite(0, 3000);
            };
        });
})();