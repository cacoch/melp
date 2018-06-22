const gulp = require('gulp');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const reload = browserSync.reload;

/**
 * copy jquery and xx to dist directory
 */
gulp.task('copy-deps1', ()  => {
	gulp.src(['node_modules/jquery/dist/jquery.min.js',
			'node_modules/what-input/dist/what-input.min.js'])
			//	{base : 'node_modules/foundation-sites/dist'})
	.pipe(gulp.dest('dist/js'));

});
/**
 * copy dependencies to dist directory
 */
gulp.task('copy-deps', ()  => {
	gulp.src(['node_modules/foundation-sites/dist/css/*.min.css',
			'node_modules/foundation-sites/dist/js/*.min.js'],
				{base : 'node_modules/foundation-sites/dist'})
	.pipe(gulp.dest('dist'));

});
/**
 * copy custom js and css to dist directory
 */
gulp.task('copy-custom', ()  => {
	gulp.src(['src/js/*.js',
			'src/css/*.css'],
				{base : 'src'})
	.pipe(gulp.dest('dist'));

});
/**
 *  * Compile pug files into HTML
 *   */
gulp.task('templates', () => {
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
	.pipe(plumber())
        .pipe(
            pug({
				locals: RESTAURANT,
				compileDebug : true,
				pretty : true
            })
        )
	.pipe(plumber.stop())
        .pipe(gulp.dest('./dist/'));
});

/**
 *  * Important!!
 *   * Separate task for the reaction to `.pug` files
 *    */
gulp.task('pug-watch', ['templates', 'copy-custom'], () => {
    return reload();
});


/**
 *  * Serve and watch the pug files for changes
 *   */
gulp.task('default', ['templates', 'copy-deps', 'copy-deps1', 'copy-custom'], () => {
    browserSync({
        server: './dist' 
			//,directory : true
    });

    gulp.watch(['./src/**/*.pug', './src/js/*.js', '.scr/css/*.css'] , ['pug-watch']);
});
