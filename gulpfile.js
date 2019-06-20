/*
 * Shopify gulp tasks fot the Theme kit usage
 */

var gulp = require('gulp')
var watch = require('gulp-watch')
const sass = require('gulp-sass')
const debug = require('gulp-debug')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const flexibility = require('postcss-flexibility')
const cssnano = require('gulp-cssnano')
const include = require('gulp-include')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const autoprefixBrowsers = ['> 1%', 'last 4 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']
var jade = require('gulp-jade')
var plumber = require('gulp-plumber')

var fs = require('fs')
var file = require('gulp-file')
var through = require('through2')

//Critical scss to css generation
gulp.task('css-critical', function (callback) {
  return gulp.src('src/styles/critical.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(debug({ title: 'sass:' }))
    .pipe(cssnano())
    .pipe(autoprefixer({
      browsers: autoprefixBrowsers,
      cascade: true
    }))
    .pipe(debug({ title: 'prefx:' }))
    .pipe(gulp.dest('assets'))
  callback()
})

//Main chunk of css below the fold generation
gulp.task('css-main', function (callback) {
  return gulp.src('src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(debug({ title: 'sass:' }))
    .pipe(cssnano())
    .pipe(autoprefixer({
      browsers: autoprefixBrowsers,
      cascade: true
    }))
    .pipe(debug({ title: 'prefx:' }))
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(debug({ title: 'maps:' }))
    .pipe(gulp.dest('assets'))
  callback()
})

//Critical css liquid snippet generation
gulp.task('critical-liquid', function () {
  var liquidFilePath = 'snippets/critical-css.liquid'
  var fileContent = ''

  fs.readFile('assets/critical.css', function (err, data) {
    if (err) throw err

    fileContent = '<style>' + data + '</style>'
    var check = fs.access(liquidFilePath, fs.constants.F_OK, function (err) {
      if (err) {
        return false
      } else {
        return true
      }
    })

    if (check === false) {
      fs.unlink(liquidFilePath, function (err) {
        if (err) throw err
        console.log('File deleted!')
      })
    }

    fs.writeFile(liquidFilePath, fileContent, function (err) {
      if (err) throw err
      console.log('Replaced!')
    })
  })
})

//Watcher
gulp.task('watch', function () {
  gulp.watch('src/styles/**/**/*.*', ['css-critical', 'css-main'])
  gulp.watch('src/scripts/**/**/*.*', ['scripts'])
  gulp.watch('assets/critical.css', ['critical-liquid'])
})

//Scripts if it needed
gulp.task('scripts', function () {
  return gulp.src('src/scripts/*.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(uglify())
    .pipe(gulp.dest('assets/'))
})

gulp.task('default', ['css-critical', 'css-main', 'scripts', 'watch'])
