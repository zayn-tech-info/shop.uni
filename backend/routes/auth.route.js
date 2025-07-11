const express = require("express");
const errorHandler = require("./errorHandler");
const customError = require("../utils/error");
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
route.post("forgotpassword", forgotPassword);

module.exports = route;
