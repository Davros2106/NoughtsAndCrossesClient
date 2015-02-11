
var copyTask = require('./../NoughtsAndCrosses/.grunt/copytask.js');
var cleanTask = require('./../NoughtsAndCrosses/.grunt/cleantask.js');
var jshintTask = require('./../NoughtsAndCrosses/.grunt/jshinttask.js');
var fileWatchTask = require('./../NoughtsAndCrosses/.grunt/filewatchertask.js');
var lessTask = require('./../NoughtsAndCrosses/.grunt/lesstask.js');
var expressTask = require('./server/server.js');
var concatTask = require('./../NoughtsAndCrosses/.grunt/concatTask.js');
var karmaTask = require('./../NoughtsAndCrosses/.grunt/karmaTask.js');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: copyTask,
        clean: cleanTask,
        jshint: jshintTask,
        watch: fileWatchTask,
        less: lessTask,
        server: expressTask,
        concat: concatTask,
        karma: karmaTask,

    });


    var port = 35002;
    grunt.registerTask('server', 'starts the express server', function(){
        expressTask.listen(port, function() {
            console.log('Express server listening on ' + port);
        });
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('nostart',['jshint','karma','clean:all','concat','copy','less' ]);
    grunt.registerTask('default',['nostart','server', 'watch']);
};


