var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    replace = require('gulp-replace'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    copy = require('gulp-copy'),
    jshint = require('gulp-jshint'),
    jslint = require('gulp-jslint'),
    less = require('gulp-less'),
    replace = require('gulp-replace'),
    sequence = require('gulp-sequence'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    del = require('del'),
    gutil = require('gulp-util'),
    server = require('gulp-express');

gulp.task('default', ['watch', 'copy', 'concat','clean']);

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
    gulp.src(['.build',
        '.build/main-app/app/scripts',
        '.build/main-app/app/images',
        '.build/main-app/app/css',
        '.build/main-app/app/index.html']);
});
gulp.task('watch', function () {
    // Watch .js files
    gulp.watch('main-app/app/scripts/*.js', ['jshint']);
    return gutil.log('gulp-watch is running')
});










