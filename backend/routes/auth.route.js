const express = require("express");

const {
  login,
  signup,
  logout,
  forgotPassword,
} = require("../controllers/auth.controller");

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.get("/logout", logout);
route.patch("/forgotPassword", forgotPassword);
// route.patch("resetPassword/:token", resetPassword);


module.exports = route;
