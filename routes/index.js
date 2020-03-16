var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function (req, res) {
    res.render("landing");
});

// AUTH ROUTES

router.get("/register", function (req, res) {
    res.render("register");
});
router.post("/register", function (req, res) {
    var newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            req.flash("error",err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            req.flash("success","Welcome to Yelpcamp" + user.username)
            res.redirect("/campgrounds");
        })
    });
});

// Show login form
router.get("/login", function (req, res) {
    res.render("login");
});
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function (req, res) {
    });
router.get("/logout", function (req, res) {
    req.logOut();
    req.flash("success","Logged you out!");
    res.redirect("/campgrounds");

});
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error","You need to be logged in to do that");
    res.redirect("/login");
}
module.exports = router;