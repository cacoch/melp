var gulp = require('gulp');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var reload = browserSync.reload;

/**
 *  * Compile pug files into HTML
 *   */
gulp.task('templates', function() {
    var YOUR_LOCALS = {
        message: 'This app is powered by gulp.pug recipe for BrowserSync'
    };

    return gulp
        .src('./src/*.pug')
        .pipe(
            pug({
                locals: YOUR_LOCALS
            })
        )
        .pipe(gulp.dest('./dist/'));
});

/**
 *  * Important!!
 *   * Separate task for the reaction to `.pug` files
 *    */
gulp.task('pug-watch', ['templates'], function() {
    return reload();
});


/**
 *  * Serve and watch the pug files for changes
 *   */
gulp.task('default', ['templates'], function() {
    browserSync({
        server: './dist'
    });

    gulp.watch('./src/*.pug', ['pug-watch']);
});
