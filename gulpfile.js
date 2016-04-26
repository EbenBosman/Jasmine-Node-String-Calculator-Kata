var gulp = require('gulp'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    jasmine = require('gulp-jasmine');

var dateTimeStamp = GetDateTimeStamp();

gulp.task('archive-test', function () {
    return gulp.src('./spec/calculator-spec.js')
        .pipe(gulp.dest('./archive/' + dateTimeStamp + '/spec'));
});

gulp.task('archive-implementation', function () {
    return gulp.src('./implementation/calculator.js')
        .pipe(gulp.dest('./archive/' + dateTimeStamp + '/implementation'));
});

gulp.task('clean', function () {
    return gulp.src(['./implementation/calculator.js', './spec/calculator-spec.js'])
        .pipe(clean({force: true}));
});

gulp.task('refresh-test', function () {
    return gulp.src(['./src/spec/calculator-spec.js'])
        .pipe(gulp.dest('./spec/'));
});

gulp.task('refresh-implementation', function () {
    return gulp.src(['./src/implementation/calculator.js'])
        .pipe(gulp.dest('./implementation/'));
});

gulp.task('refresh', function (callback) {
    return runSequence('archive-implementation', 'archive-test', 'clean', 'refresh-test', 'refresh-implementation', callback)
});

gulp.task('jasmine', function() {
    return gulp.src('./spec/calculator-spec.js')
        .pipe(jasmine())
});

gulp.task('watch', function() {
    return gulp.watch(['./spec/calculator-spec.js', './implementation/calculator.js'], ['jasmine']);
});

gulp.task('default', ['watch']);

/**
 * @return {string}
 */
function GetDateTimeStamp() {
    var now = new Date();

    var date = [now.getFullYear(), now.getDate(), now.getMonth() + 1,];
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

    var suffix = ( time[0] < 12 ) ? "AM" : "PM";

    time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
    time[0] = time[0] || 12;

    for (var i = 1; i < 3; i++) {
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }

    return date.join(".") + "_" + time.join(".") + " " + suffix;
}