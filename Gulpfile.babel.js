import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import less from 'gulp-less';
import del from 'del';

// Javascript
gulp.task('js:bundle', () => {

    gulp.start('js:clean');

    gulp.src('app/js/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('app/js/'));

});

gulp.task('js:clean', () => {
    del(['app/js/bundle.js']);
    del.sync(['app/js/bundle.js']);
})

gulp.task('js:watch', () => {
    gulp.watch('app/js/**/*.js', ['js:bundle']);
});

// css
gulp.task('css:bundle', () => {

    gulp.start('css:clean');

    gulp.src('app/css/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('css:clean', () => {
    del(['app/css/style.css']);
    del.sync(['app/css/style.css']);
});

gulp.task('css:watch', () => {
    gulp.watch('app/css/**/*.less', ['css:bundle']);
});

gulp.task('all:watch', () => {
    gulp.watch(['app/css/**/*.less, app/js/**/*.js'], ['js:watch', 'css:watch'])
});
