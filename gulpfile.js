/*
 * Shopify gulp tasks fot the Theme kit usage
 */

const gulp = require('gulp')
// var watch = require('gulp-watch')
const sass = require('gulp-sass')
const debug = require('gulp-debug')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const include = require('gulp-include')
const uglify = require('gulp-uglify')

const autoprefixBrowsers = ['> 1%', 'last 4 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11']

const fs = require('fs')

// Critical scss to css generation
gulp.task('css-critical', (callback) => {
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
})

// Main chunk of css below the fold generation
gulp.task('css-main', (callback) => {
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
})

// Critical css liquid snippet generation
gulp.task('critical-liquid', () => {
  const liquidFilePath = 'snippets/critical-css.liquid'
  let fileContent = ''

  fs.readFile('assets/critical.css', (err, data) => {
    if (err) throw err

    fileContent = `<style>${data}</style>`
    let check = fs.access(liquidFilePath, fs.constants.F_OK, (err) => {
      if (err) {
        return false
      } else {
        return true
      }
    })

    if (check === false) {
      fs.unlink(liquidFilePath, (err) => {
        if (err) throw err
        console.log('File deleted!')
      })
    }

    fs.writeFile(liquidFilePath, fileContent, (err) => {
      if (err) throw err
      console.log('Replaced!')
    })
  })
})

// Watcher
gulp.task('watch', () => {
  gulp.watch('src/styles/**/**/*.*', ['css-critical', 'css-main'])
  gulp.watch('src/scripts/**/**/*.*', ['scripts'])
  gulp.watch('assets/critical.css', ['critical-liquid'])
})

// Scripts if it needed
gulp.task('scripts', () => {
  return gulp.src('src/scripts/*.js')
    .pipe(include())
    .on('error', console.log)
    .pipe(uglify())
    .pipe(gulp.dest('assets/'))
})

gulp.task('default', ['css-critical', 'css-main', 'scripts', 'watch'])
