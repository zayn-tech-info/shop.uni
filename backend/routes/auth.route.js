const express = require("express");

const {
  login,
  signup,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
  protectRoute,
} = require("../controllers/auth.controller");

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.get("/logout", logout);
route.patch("/forgotPassword", forgotPassword);
route.patch("/resetPassword/:token", resetPassword);
route.patch("/updatePassoword", protectRoute, updatePassword);

module.exports = route;
