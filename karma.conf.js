module.exports = function(config) {


    config.set({

        basePath: '',

        autoWatch: false,

        browsers: ['Chrome'],

        frameworks: ['mocha','chai','sinon-chai'],

        logLevel: config.LOG_INFO,

        port: 9876,

        reporters: ['nyan'],

        colors: true,

        singleRun: false,

    });

};