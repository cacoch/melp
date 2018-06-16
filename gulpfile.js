var gulp = require('gulp');
var browserSync = require('browser-sync');
var pug = require('gulp-pug');
var reload = browserSync.reload;

/**
 *  * Compile pug files into HTML
 *   */
gulp.task('templates', function() {
    var RESTAURANT={
			"id":"851f799f-0852-439e-b9b2-df92c43e7672",
			"rating":1,
			"name":"Barajas, Bahena and Kano",
			"contact":{
					"site":"https://federico.com",
					"email":"Anita_Mata71@hotmail.com",
					"phone":"534 814 204"},
			"address":{
					"street":"82247 Mariano Entrada",
					"city":"Mérida Alfredotown",
					"state":"Durango",
			"location":{
					"lat":19.440057053713137,
					"lng":-99.12704709742486
			}}};

    return gulp
        .src('./src/*.pug')
        .pipe(
            pug({
                locals: RESTAURANT 
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
