(function () {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.providers.audio')
        .factory('AudioSprite', function ($timeout, $document) {
            return function (source, sourceType) {
                var me = this,
                    document = $document[0],
                    audioElement = document.createElement('audio'),
                    sourceElement = document.createElement('source');
                sourceElement.src = source;
                sourceElement.type = sourceType;
                audioElement.appendChild(sourceElement);
                document.body.appendChild(audioElement);

                this.playSprite = function (startTime, duration) {
                    audioElement.currentTime = startTime;
                    $timeout(callAtTimeout, duration);
                    function callAtTimeout() {
                        audioElement.pause();
                        console.log('foo');
                    }

                    audioElement.play();
                };
            };
        });
})();