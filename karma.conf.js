module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        logLevel: config.LOG_INFO,
        port: 9876,
        reporters: ['nyan'],
        colors: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: true
    });
};