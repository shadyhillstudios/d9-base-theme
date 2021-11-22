var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps');
     
gulp.task('scss', function () {
  return gulp.src(['./scss/style.scss', './scss/ckeditor.scss'])
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))
    .pipe(livereload({ start: true }));
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./scss/**/*.scss', gulp.series('scss'));
});