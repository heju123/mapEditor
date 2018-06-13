var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var fileStreamRotator = require('file-stream-rotator')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
var errorLogfile = fileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: path.join(path.join(__dirname, 'logs'), 'error-%DATE%.log'),
    frequency: 'daily',
    verbose: false
});

function writeError2Log(err, req, res){
    var now = new Date();
    var time = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' '
        + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    var meta = '[' + time + '] '+req.method+' ' + req.url + '\r\n';
    errorLogfile.write(meta + err.stack + '\r\n\r\n\r\n');
}

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
    writeError2Log(err, req, res);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
    writeError2Log(err, req, res);
});


module.exports = app;
