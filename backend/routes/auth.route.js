const express = require("express");
const errorHandler = require("./errorHandler");
const customError = require("../utils/error");
const { login, signup } = require("../controllers/auth.controller");

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);

module.exports = route
