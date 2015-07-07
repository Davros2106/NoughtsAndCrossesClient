angular.module('Tombola.NoughtsAndCrosses.Providers.audio',[]);
angular.module('Tombola.NoughtsAndCrosses.Providers.gameApiProxy',[]);
angular.module('Tombola.NoughtsAndCrosses.Providers.gameModel',[]);
angular.module('Tombola.NoughtsAndCrosses.directives',[]);
angular.module('Tombola.NoughtsAndCrosses', ['Tombola.NoughtsAndCrosses.Providers.audio',
                                             'Tombola.NoughtsAndCrosses.Providers.gameApiProxy',
                                             'Tombola.NoughtsAndCrosses.Providers.gameModel',
                                             'Tombola.NoughtsAndCrosses.directives']);
