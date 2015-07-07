(function () {
    'use strict';
    describe('Testing the audioService', function () {
        var $timeout;
        var $document;
        var audioSprite;
        var audioElement;
        beforeEach(function () {
            module('tombola.noughtsAndCrosses.providers.audio');
            inject(function ($injector) {
                $timeout = $injector.get('$timeout');
                $document = $injector.get('$document');
                audioSprite = $injector.get('AudioSprite');
            });
        });
        it("Making sure audio Element is being created correctly.", function () {
            var mySprite = new audioSprite('SourceUrl', 'SourceType');
            var doc = $document[0];
            var body = doc.body;
            var lastElement = body.children[body.children.length - 1];
            var innerElement = lastElement.children[0];
            assert.equal(lastElement.localName, 'audio');
            assert.equal(lastElement.children.length, 1);
            assert.equal(innerElement.localName, 'source');
            assert.equal(innerElement.type, 'SourceType');
            assert.include(innerElement.src, 'SourceUrl');
        });
    });
})();