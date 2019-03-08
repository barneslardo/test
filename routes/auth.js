const passport = require("passport");

require("../services/localPassport");

module.exports = app => {
  app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/failure " }),
    function(req, res) {
      res.redirect("/");
    }
  );
};
