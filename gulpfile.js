const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const cssdeclarationsorter = require('css-declaration-sorter');
const cssnano = require('cssnano');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const paths = {
  styles: {
    base: 'src/styles/',
    src: 'src/styles/main.scss',
    dest: 'dist/styles/',
    watch: 'src/styles/**/*.scss',
  },
  scripts: {
    base: 'src/scripts/',
    src: 'src/scripts/**/*.js',
    dest: 'dist/scripts/',
    watch: 'src/scripts/**/*.js',
  },
};

const styles = function () {
  const plugins = [autoprefixer(), cssdeclarationsorter(), cssnano()];

  return gulp
    .src(paths.styles.src, {
      base: paths.styles.base,
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(
      rename({
        basename: 'styles',
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(paths.styles.dest));
};

const scripts = function () {
  return gulp
    .src(paths.scripts.src, {
      base: paths.scripts.base,
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(paths.scripts.dest));
};

const watch = function () {
  gulp.watch(paths.scripts.watch, scripts);
  gulp.watch(paths.styles.watch, styles);
};
