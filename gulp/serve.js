// Generated by CoffeeScript 1.12.2
(function() {
  var $, bs;

  $ = require('./plugins');

  bs = $.browserSync.create();

  $.gulp.task('serve', ['watch'], function() {
    return bs.init({
      server: {
        baseDir: ['.tmp/serve', 'src'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });
  });

  $.gulp.task('reload', function() {
    bs.reload();
  });

  $.gulp.task('reload:css', ['less'], function() {
    return $.gulp.src('src/all.css').pipe(bs.reload({
      stream: true
    }));
  });

}).call(this);
