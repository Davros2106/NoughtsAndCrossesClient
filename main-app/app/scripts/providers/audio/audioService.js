(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.providers.audio')

        .factory('audioService', function($timeout, $document) {

            var audioFactory = {};
            var audioSprite;
            var me = this;


            audioFactory.setUpSprite = function(){

                var document = $document[0];
                audioSprite = document.createElement('audio');

                var source = document.createElement('source');
                source.src = 'audio/terminatorSprite.mp3';
                source.type = 'audio/mpeg';

                audioSprite.appendChild(source);
                document.body.appendChild(audioSprite);


            };


            audioFactory.playSprite = function(startTime, duration){
                audioSprite.currentTime = startTime;
                $timeout(callAtTimeout, duration);

                function callAtTimeout() {

                    audioSprite.pause();

                }

                audioSprite.play();
            };

               audioFactory.makeMove = function() {

                   audioFactory.playSprite(0, 3000);

            };

           return audioFactory;

        });
})();