// import 3rd party modules
var createError = require("http-errors"); // error handler
var express = require("express"); // Express
var path = require("path"); // use relative path in our application; don't need to write absolute path; path will figure out the directory
var cookieParser = require("cookie-parser"); //
var logger = require("morgan"); // HTTP logger

// import routers
var indexRouter = require("../routes/index"); //
var usersRouter = require("../routes/users");
var inventoryRouter = require("../routes/inventory.router");

// instantiate new express object
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views")); // set the location of views folder
app.set("view engine", "ejs"); // Set ejs as engine to render view template

app.use(logger("dev")); // use logger to log HTTP request
app.use(express.json()); // express render json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public"))); // set static folder to public folder
app.use(express.static(path.join(__dirname, "../node_modules"))); // second static folder, contain bootstrap and fontawesome

app.use("/", indexRouter); // root path, any path defined in routes/index.js
app.use("/users", usersRouter); // users root path, point to any path defined in routes/users.js
app.use("/inventory", inventoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler: for other errors
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error"); // render views/error.js
});

module.exports = app; // export app instance