const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function comprimeJavaScript() {
  return gulp
    .src("./source/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
}

function styles() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./build/styles"));
}

function images() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}
exports.default = gulp.parallel(styles, images);

exports.watch = function () {
  gulp.watch("./source/styles/*.scss", gulp.parallel(styles));
};
exports.javaScript = comprimeJavaScript;
