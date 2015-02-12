(function() {
    'use strict';

    var expect = chai.expect;

    describe('Ensure initial constants are correct', function () {
        var constants;


         beforeEach(function(){
             module('tombola.noughtsAndCrosses.providers.gameModel');
             inject(function($injector){
                 constants = $injector.get('gameConstants')
             });


         });

    it('Ensure initial gameboard is set',function(){
        expect(constants.gameboard).to.equal('000000000');
    });


    });

})();