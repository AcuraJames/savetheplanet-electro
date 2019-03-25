import gulp from 'gulp'
import sass from 'gulp-sass'
import rev from 'gulp-rev'
import revReplace from 'gulp-rev-replace'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import imagemin from 'gulp-imagemin'
import uglify from 'gulp-uglify'
import {create as bsCreate} from 'browser-sync'

const browserSync = bsCreate()


gulp.task('styles', () => {
    return gulp.src('src/styles/main.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rev())
        .pipe(gulp.dest('public/styles'))
        .pipe(rev.manifest('css.json'))
        .pipe(gulp.dest('manifest'))
})

gulp.task('index', () => {
    return gulp.src('src/index.html')
        .pipe(revReplace({
            manifest: gulp.src('manifest/css.json')
        }))
        .pipe(gulp.dest('public'))
})

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('public/js'))
})

gulp.task('img', () => {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest('public/img'))
})

gulp.task('build', gulp.series('styles', 'index', 'js', 'img'))

gulp.task('watch', () => {
    gulp.watch('src/styles/**/*.scss', gulp.series('styles'))
    gulp.watch('src/index.html', gulp.series('index'))
    gulp.watch('src/js/**/*.js', gulp.series('js'))
    gulp.watch('src/img/**/*.*', gulp.series('img'))
})

gulp.task('serve', () => {
    browserSync.init({
        server: 'public',
        tunnel: true
    })
    browserSync.watch('public/**/*.*').on('change', browserSync.reload)
})

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')))

