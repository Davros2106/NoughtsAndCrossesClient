(function () {
    'use strict';
    var expect = chai.expect,
        constants;
    describe('Ensure initial constants are correct', function () {
        beforeEach(function () {
            module('Tombola.NoughtsAndCrosses.Providers.gameModel');
            inject(function ($injector) {
                constants = $injector.get('GAME_CONSTANTS')
            });
        });
        it('Ensure initial startingGameboard is correct', function () {
            expect(constants.startingGameboard).to.equal('000000000');
        });
        it('Ensure defaultPlayer1Type is initially set as human', function () {
            expect(constants.defaultPlayer1Type).to.equal('human');
        });
        it('Ensure defaultPlayer2Type is initially set as random', function () {
            expect(constants.defaultPlayer2Type).to.equal('random');
        });
    });
})();