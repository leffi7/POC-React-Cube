'use strict';

/*
* WEBPACK GULPFILE
*
* Commands:

    * gulp default
        * jekyllbuild
        * browsersync
        * watch files
    * gulp prod
        * clean up _site folder
        * create sitemap
    * gulp ftp
        * deploy to server
    * gulp critical
        * generate critical CSS inline
*/

// SETTINGS
var pkg                 = require('./package.json'),
    gulp                = require('gulp'),
    nano                = require('gulp-cssnano'),    
    sourcemaps          = require('gulp-sourcemaps'),    
    browserSync         = require('browser-sync'),
    sass                = require('gulp-sass'),
    prefix              = require('gulp-autoprefixer'),
    gUtil               = require('gulp-util'),
    plumber             = require('gulp-plumber'),
    notify              = require('gulp-notify'),
    ftp                 = require('vinyl-ftp'),
    imagemin            = require('gulp-imagemin'),
    pngquant            = require('imagemin-pngquant'),
    eslint              = require('gulp-eslint'),
    webpack             = require('gulp-webpack'),
    scssLint            = require('gulp-scss-lint'),
    cached              = require('gulp-cached'),
    sitemap             = require('gulp-sitemap'),
    del                 = require('del'),
    uncss               = require('gulp-uncss'),
    critical            = require('critical').stream;


// HELPER FUNCTIONS
function onError(err) {
    gUtil.log('\n', gUtil.colors.bold(gUtil.colors.red('Error ocurred: ') + err.message + ' @ ' + err.fileName + ':' + err.lineNumber), '\n');
    gUtil.beep();
    this.emit('end');
}


// CLEAN FOLDER(S)
gulp.task('clean', function(cb) {
  del(pkg.clean, cb);
});


// Launch the Server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: pkg.browsersync.baseDir
        },
        notify: true
    });
});


// HTML, FONTS, HTACCESS, ROBOTS
gulp.task('html', function () {
    browserSync.reload();
});


// IMAGES
gulp.task('img', function() {
    gulp.start('imgbuild');
    browserSync.reload();
});

gulp.task('imgbuild', function () {    
    return gulp.src(pkg.img.src)
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest(pkg.img.dest))
        .pipe(notify({
            'message': 'IMG: images optimized',
            'onLast': true // otherwise the notify will be fired for each file in the pipe
        }));
});


// SCSS lint
gulp.task('scsslint', function() {
    return gulp.src(pkg.sass.hint.src)
        .pipe(cached('scssLint'))
        .pipe(scssLint());
});

gulp.task('sass', ['scsslint'], function() {
    gulp.start('sassbuild');
});

// Compile SCSS files
gulp.task('sassbuild', function () {
    return gulp.src(pkg.sass.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({
            'errorHandler': onError
        }))       
        .pipe(sass({
            includePaths: ['sass'],
            outputStyle: 'compressed'   
        }).on('error', notify.onError("Error: <%= error.message %>")))
        .pipe(prefix(pkg.sass.autoprefixer.browsers, { cascade: true }))
        /*.pipe(uncss({
            html: pkg.sass.uncss.files,
            ignore: pkg.sass.uncss.ignore
        }))
        .pipe(nano())*/
        .pipe(sourcemaps.write(pkg.sass.sourcemaps))
        .pipe(gulp.dest(pkg.sass.dest))
        .pipe(notify({
            'message': 'SASS: app.css build complete',
            'onLast': true // otherwise the notify will be fired for each file in the pipe
        }))        
        .pipe(browserSync.stream({match: '**/*.css'}));
        //.pipe(browserSync.reload({stream:true}))
});


// JAVASCRIPT
gulp.task('eslint', function() {
    return gulp.src(pkg.js.hint.src)
        .pipe(plumber({
            'errorHandler': onError
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('js', ['eslint'], function() {
    gulp.start('jsbuild');
});

// build js with webpacks
gulp.task('jsbuild', function(cb) {
    return gulp.src(pkg.js.webpack.src) // list all JS files in vendor
        .pipe(plumber({
            'errorHandler': onError
        }))
        .pipe(webpack( require('./webpack.config.js')))
        .pipe(gulp.dest(pkg.js.webpack.dest))
        .pipe(notify({
            'message': 'JS build complete',
            'onLast': true // otherwise the notify will be fired for each file in the pipe
        }))
        .pipe(browserSync.stream({match: '**/*.js'}));

    //return stream;
});


// CREATE SITEMAP
gulp.task('sitemap', function () {
    gulp.src(pkg.sitemap.src)
        .pipe(sitemap({
            siteUrl: pkg.sitemap.domain
        }))
        .pipe(gulp.dest(pkg.sitemap.dest))
        .pipe(notify({
            'message': 'SITEMAP: Sitemap created',
            'onLast': true // otherwise the notify will be fired for each file in the pipe
        }));        
});


// GENERATE CRITICAL CSS (not included in gulptask)
gulp.task('critical', function () {
    return gulp.src(pkg.critical.src)
        .pipe(critical({
            base: pkg.critical.base,
            inline: true,
            css: pkg.critical.css,
            dimensions: [{
                height: pkg.critical.dimensions[0].height,
                width: pkg.critical.dimensions[0].width
            }, {
                height: pkg.critical.dimensions[1].height,
                width: pkg.critical.dimensions[1].width
            }]
        }))
        .pipe(gulp.dest(pkg.critical.dest));
});


// DEFAULT TASK
gulp.task('default', ['imgbuild','sassbuild','jsbuild'], function(){
    gulp.start('browser-sync');
    
    gulp.watch(pkg.watch.img, ['img']);
    gulp.watch(pkg.watch.fonts, ['html']);
    gulp.watch(pkg.watch.js, ['js']);        
    gulp.watch(pkg.watch.css, ['sass']);  
    gulp.watch(pkg.watch.html, ['html']);
});

// PROD TASK
gulp.task('prod', ['clean'], function(){   
    gulp.start('imgbuild');
    gulp.start('sassbuild');
    gulp.start('jsbuild');
    gulp.start('sitemap');
});

// FTP-TASK
gulp.task('ftp', function () {
    var conn = ftp.create( {
        host: pkg.ftp.host,
        user: pkg.ftp.user,
        password: pkg.ftp.password,
        parallel: 10,
        log: gUtil.log
    });
 
    // using base = '.' will transfer everything to /public_html correctly 
    // turn off buffering in gulp.src for best performance 
    return gulp.src(
        pkg.ftp.globs, { base: pkg.ftp.base, buffer: false })
        .pipe(conn.newer(pkg.ftp.folder)) // only upload newer files 
        .pipe(conn.dest(pkg.ftp.folder)
    );
});
