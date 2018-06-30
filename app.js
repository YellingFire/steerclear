var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  console.log("Process.env.Node hit");  
  app.use(express.static(path.join(__dirname, 'client')));
}


app.get('*', (req, res) => {
  console.log("app.js * is hit");
  console.log(path.join(__dirname + '/client/build/index.html'));
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

var port = process.env.PORT || '3000';

app.listen(port, () => {
  console.log('Server started on port: ' + port);
  console.log("process.env actual: " + process.env.NODE_ENV);
});

module.exports = app;