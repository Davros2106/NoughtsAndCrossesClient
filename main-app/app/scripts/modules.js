angular.module('tombola.noughtsAndCrosses.providers.audio',[]);
angular.module('tombola.noughtsAndCrosses.providers.gameApiProxy',[]);
angular.module('tombola.noughtsAndCrosses.providers.gameModel',[]);
angular.module('tombola.noughtsAndCrosses.directives',[]);
angular.module('tombola.noughtsAndCrosses', ['tombola.noughtsAndCrosses.providers.audio',
                                             'tombola.noughtsAndCrosses.providers.gameApiProxy',
                                             'tombola.noughtsAndCrosses.providers.gameModel',
                                             'tombola.noughtsAndCrosses.directives']);
