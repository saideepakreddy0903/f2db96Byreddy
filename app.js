var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var mongodb = require('mongodb')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var product = require("./models/product");
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector',selectorRouter);
app.use('/resource',resourceRouter);

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
  res.render('error');
});

async function recreateDB() {
  // Delete everything
  await product.deleteMany();
  let instance1 = new
    product({
      product1: "Magazines", product2: 150,
      product3: "Paper"
    });
  let instance2 = new
    product({
      product1: "Candy", product2: 90,
      product3: "Food"
    });
  let instance3 = new
    product({
      product1: "Shampoo", product2: 200,
      product3: "Hair"
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First product saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Secound product saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("3rd product saved")
  });
}
let reseed = true;
if (reseed) {recreateDB(); }
module.exports = app;
