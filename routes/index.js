var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/service", function (req, res, next) {
  res.render("index", { title: "Service" });
});

router.get("/julio", function (req, res, next) {
  res.render("main", { title: "Julio" });
});

module.exports = router;
