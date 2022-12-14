require("dotenv").config();

let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
var indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let bookingsRouter = require("./routes/bookings");
let roomsRouter = require("./routes/rooms");
let contactRouter = require("./routes/contacts");
let loginRouter = require("./routes/login");
let cors = require("cors");

const passport = require("passport");
require("./auth/auth");
require("./db");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use("/login", loginRouter);

app.use(
  "/bookings",
  passport.authenticate("jwt", { session: false }),
  bookingsRouter
);
app.use(
  "/rooms",
  passport.authenticate("jwt", { session: false }),
  roomsRouter
);
app.use(
  "/contacts",
  passport.authenticate("jwt", { session: false }),
  contactRouter
);
app.use(
  "/users",
  passport.authenticate("jwt", { session: false }),
  usersRouter
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(app.get("port"), () => {
  console.log("Server on port ", process.env.PORT);
});

module.exports = app;
