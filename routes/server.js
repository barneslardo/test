module.exports = app => {
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/login", function(req, res) {
    res.render("login", { user: req.user });
  });
  app.get("/failure", function(req, res) {
    res.send("Something went wrong");
  });
};
