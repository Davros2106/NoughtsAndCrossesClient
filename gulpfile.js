var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    copy = require('gulp-copy'),
    less = require('gulp-less'),
    sequence = require('gulp-sequence'),
    watch = require('gulp-watch'),
    del = require('del'),
    gutil = require('gulp-util'),
    server = require('gulp-express'),
    karma = require('gulp-karma'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default', ['unit-tests', 'clean', 'concat', 'copy', 'less', 'watch']);
gulp.task('jshint', function () {
    return gulp.src('main-app/app/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
gulp.task('copy', function () {
    gulp.src('main-app/app/images/*')
        .pipe(gulp.dest('.build/images'));
    gulp.src('main-app/app/index.html')
        .pipe(gulp.dest('.build/'));
    gulp.src('angular/*')
        .pipe(gulp.dest('.build/angular'));
    gulp.src('main-app/app/audio/*')
        .pipe(gulp.dest('.build/audio'));
});
gulp.task('concat', function () {
    gulp.src(['main-app/app/scripts/modules.js',
        'main-app/app/scripts/providers/**/*.js',
        'main-app/app/scripts/directives/**/*.js',
        'main-app/app/scripts/controllers.js'])
        .pipe(concat('built.js'))
        .pipe(gulp.dest('.build/'));
});
gulp.task('clean', function () {
    gulp.src([
        '.build/main-app/app/scripts',
        '.build/main-app/app/images',
        '.build/main-app/app/css',
        '.build/main-app/app/index.html'])
        .pipe(clean());
});
gulp.task('less', function () {
    gulp.src('main-app/app/less/import.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('.build/'));
});
gulp.task('unit-tests', function () {
    gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-mocks/angular-mocks.js',
        './main-app/app/scripts/modules.js',
        './main-app/app/scripts/controllers.js',
        './main-app/app/scripts/providers/game-Api-Proxy.js',
        './main-app/app/scripts/providers/audio/audio-sprite.js',
        './main-app/app/scripts/providers/audio/audio-service.js',
        './main-app/app/scripts/providers/constants/game-Constants.js',
        './main-app/app/scripts/providers/constants/http-constants.js',
        './main-app/app/scripts/providers/game-Model.js',
        './main-app/app/scripts/directives/directives.js',
        './main-app/app/tests/mocks/*.js',
        './main-app/app/tests/*.js'])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
});
gulp.task('watch', function () {
    gulp.watch('main-app/app/scripts/*.js', ['jshint', 'concat', 'clean']);
    gulp.watch('main-app/app/images/*.*', ['clean', 'copy']);
    gulp.watch('main-app/app/less/*.*', ['clean', 'less']);
    gulp.watch('main-app/app/index.html', ['clean', 'copy']);
    gulp.watch('main-app/app/audio/*.*', ['clean', 'copy']);
    return gutil.log('gulp-watch is running')
});