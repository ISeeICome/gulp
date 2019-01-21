var gulp = require('gulp');
var minifycss = require("gulp-minify-css");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var notify = require("gulp-notify");

gulp.task('minifycss',async()=>{
     gulp.src('dev/css/*.css')
        .pipe(gulp.dest('build/css'))
        .pipe(minifycss())
        // .pipe()
})

gulp.task('default',gulp.series('minifycss'));