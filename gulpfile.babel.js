import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import {create as bsCreate} from 'browser-sync'

const browserSync = bsCreate()

gulp.task('index', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('public'))
})

gulp.task('styles', () => {
    return gulp.src('src/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/styles'))
})

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('public/js'))
})

gulp.task('img', () => {
    return gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('public/img'))
})

gulp.task('build', gulp.series('index', 'styles', 'js', 'img'))

gulp.task('watch', () => {
    gulp.watch('src/index.html', gulp.series('index'))
    gulp.watch('src/styles/**/*.scss', gulp.series('styles'))
    gulp.watch('src/js/**/*.js', gulp.series('js'))
    gulp.watch('src/img/**/*.*', gulp.series('img'))
})

gulp.task('serve', () => {
    browserSync.init({
        server: 'public'
    })
    browserSync.watch('public/**/*.*').on('change', browserSync.reload)
})

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')))

