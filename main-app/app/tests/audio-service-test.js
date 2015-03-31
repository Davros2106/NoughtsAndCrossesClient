(function() {
    'use strict';

    describe('Testing the audioService', function () {

        var $timeout;
        var audioServiceMock;
        var audioService;
        var sandbox;



        beforeEach(function () {
            module('tombola.noughtsAndCrosses.providers.audio');


            module(function ($provide) {
                $provide.value('audioService', mocks.audioService);
            });

            inject(function ($injector) {

                sandbox = sinon.sandbox.create();
                audioServiceMock = sinon.sandbox.mock(mocks.audioService);

                $timeout = $injector.get('$timeout');
                audioService = $injector.get('audioService');

            });
        });

        it("", function() {
          expect()

        });







            afterEach(function () {
                audioServiceMock.verify();
                sandbox.restore();
        });

    });


})();
