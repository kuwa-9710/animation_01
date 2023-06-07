const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const minifyCSS = require("gulp-clean-css");

gulp.task("styles", function (done) {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest("./css"))
    .on("end", done);
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.series("styles"));
});

gulp.task("default", gulp.parallel("styles", "watch"));
