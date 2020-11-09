import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import info from './package.json';

const server = browserSync.create();

const PRODUCTION = yargs.argv.prod;

const paths = {
    styles: {
        src:  [
            'src/assets/scss/style.main.scss',
        ],
        dest: 'assets/css'
    },
    images: {
        src:  'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest: 'assets/images'
    },
    others: {
        src:  ['src/assets/**/*', '!src/assets/{images,js,scss,fonts}', '!src/assets/{images,js,scss}/**/*' ],
        dest: 'assets'
    },
    scripts: {
        src: [
            'src/assets/js/functions.js',
            'src/assets/js/function.ie11.vars.js',
        ],
        dest: 'assets/js'
    },
    package: {
        src: ['**/*', '!.vscode', '!node_modules{,/**}', '!theme_versions{,/**}', '!src{,/**}', '!.babelrc', '!.gitignore', '!gulpfile.babel.js', '!package.json', '!package-lock.json', '!build{,/**}'],
        createdest: `theme_versions/${`${info.name}`}`,
        zipdest: `theme_versions/${`${info.name}`}{,/**}`,
        finaldest: 'theme_versions'
    }
}

export const serve = (done) => {
    server.init({
        proxy: "http://localhost/myfirsttheme"
    });
    done();
}

export const reload = (done) => {
    server.reload();
    done();
}

export const clean = () => del(['assets']);

export const styles = () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION,cleanCSS({compatibility: 'ie11'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

export const images = () => {
    return gulp.src(paths.images.src)
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(gulp.dest(paths.images.dest));
}

export const watch = () => {
    gulp.watch('src/assets/scss/**/*.scss', styles);
    gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
    gulp.watch('**/*.php', reload);
    gulp.watch(paths.images.src, gulp.series(images, reload));
    gulp.watch(paths.others.src, gulp.series(copy, reload));
}

export const copy = () => {
    return gulp.src(paths.others.src)
        .pipe(gulp.dest(paths.others.dest));
}

export const scripts = () => {
    return gulp.src(paths.scripts.src)
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env']
                                }
                            }
                    }
                ] 
            },
            output: {
                filename: '[name].js'
            },
            externals: {
                jquery: 'jQuery',
            },
            devtool: !PRODUCTION ? 'inline-source-map' : false,
            mode: PRODUCTION ? 'production' : 'development'
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}

export const compress = () => {
    return gulp.src(paths.package.src)
        .pipe(replace('myfirsttheme', info.name))
        .pipe(gulp.dest(paths.package.createdest));
}

export const zipfolder = () => {
    return gulp.src(paths.package.zipdest)
        .pipe(zip(`${info.name+`.`+info.version}.zip`))
        .pipe(gulp.dest(paths.package.finaldest));
}

export const dev     = gulp.series(clean, gulp.parallel(styles, scripts, images, copy), serve, watch);
export const build_the_theme = gulp.series(clean, gulp.parallel(styles, scripts, images, copy));
export const compress_the_theme = gulp.series(build_the_theme, compress, zipfolder);
export default dev;