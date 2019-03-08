const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const keys = require("./config/keys");
require("./routes/server")(app);
require("./routes/auth")(app);

passport.serializeUser(function(user, cb) {
  db.users.findById(id, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

app.use(require("cookie-parser")());
app.use(bodyParser.json());
app.use(require("morgan")("combined"));
app.use(
  require("express-session")({
    secret: keys.Secret,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running on " + PORT));
