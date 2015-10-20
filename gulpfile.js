var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	reactify = require('reactify'),
	bs = require('browser-sync'),
	reload = bs.reload,
	minifyHtml = require('gulp-minify-html');

var production = process.env.NODE_ENV === 'production';

gulp.task('browserify', function(){
	var bundler = browserify('./components/Main.js', {basedir: __dirname, debug: !production});
	bundler.transform(reactify);

	var stream = bundler.bundle();

	return stream
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./transpiled'))
		.pipe(reload({stream: true}));
});

gulp.task('html', function(){
	gulp.src('./app/*.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('./transpiled'))
	.pipe(reload({stream: true}));
});

gulp.task('watchFiles', function(){

	bs.init({
		server: './transpiled'
	});

	gulp.watch('./app/*.html', ['html']);
	gulp.watch('./components/*.js', ['browserify']);
});

gulp.task('default', ['watchFiles']);