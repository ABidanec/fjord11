var gulp = require("gulp"),
	browserSync = require("browser-sync"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer");

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
				.pipe(sass().on('error', sass.logError))
				.pipe(autoprefixer(['last 1 versions', '>1%', 'ie 8', 'ie 7'], {cascade : true}))
				.pipe(gulp.dest('app/css'))
				.pipe(browserSync.reload({stream : true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir : 'app'
		},
		notify : false
	});
});


gulp.task('watch', ['sass', 'browser-sync'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});


gulp.task("default", ["watch"]);