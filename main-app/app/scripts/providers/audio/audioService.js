(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.services.audio')

        .service('audioService', function($timeout, $document) {

            var me = this;
            var audioSprite;

            var setUpSprite = function(){

                var document = $document[0];
                audioSprite = document.createElement('audio');

                var source = document.createElement('source');
                source.src = 'audio/terminatorSprite.mp3';
                source.type = 'audio/mpeg';

                audioSprite.appendChild(source);
                document.body.appendChild(audioSprite);

            };

            var playSprite = function(startTime, duration){
                audioSprite.currentTime = startTime;
                $timeout(callAtTimeout, duration);

                function callAtTimeout() {
                    audioSprite.pause();
                }

                audioSprite.play();

            };

               me.makeMove = function() {

                   playSprite(0, 3000);
            };

          setUpSprite();

        });
})();