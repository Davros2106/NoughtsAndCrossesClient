(function () {
    describe('Game-square tests', function () {
        var compile,
            rootScope;
        beforeEach(module('tombola.noughtsAndCrosses.directives'));
        beforeEach(inject(function ($compile, $rootScope) {
            compile = $compile;
            rootScope = $rootScope;
        }));
        it('game-square directive is functional..', function () {
            var directiveElement1 = '<game-square cellnumber="0"></game-square>';
            var element = compile(directiveElement1)(rootScope);
            rootScope.$digest();
            expect(element[0].toString()).to.be.equal('[object HTMLDivElement]');
            expect(element.attr('cellnumber')).to.be.equal('0');
        });
    });
}());
