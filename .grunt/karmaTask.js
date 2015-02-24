module.exports = {
    unit:{
      configFile: 'karma.conf.js',
          options:{
              files:[
                  './bower_components/angular/angular.js',
                  './bower_components/angular-mocks/angular-mocks.js',
                  './main-app/app/scripts/modules.js',
                  './main-app/app/scripts/controllers.js',
                  './main-app/app/scripts/providers/game-Api-Proxy.js',
                  './main-app/app/scripts/providers/constants/game-Constants.js',
                  './main-app/app/scripts/providers/constants/$http-Constants.js',
                  './main-app/app/scripts/providers/game-Model.js',
                  './main-app/app/scripts/directives/directives.js',
                  './main-app/app/tests/mocks/*.js',
                  './main-app/app/tests/*.js']
          }

    }
};