const asyncErrorHandler = require("../utils/asyncErrorHandler");
const User = require("../models/user.model");
const customError = require("../utils/error");
const sendToken = require("../utils/sendToken");

const signup = asyncErrorHandler(async (req, res, next) => {
  // 1. Make sure the user provide all the given field
  const { username, fullname, email, password } = req.body;

  if (!username || fullname || email || password) {
    const error = new customError("All fields are required", 400);
    next(error);
  }

  // 2. check if there isn't any existing user with the credientials provided
  const existingUser = User.find({ email });

  if (existingUser) {
    const error = new customError("User already exist with this email", 400);
    next(error);
  }

  //   if all passes then create the user
  const user = await User.create({
    fullname,
    username,
    email,
    password,
  });
  sendToken(user, res, "User registered successfully");
});

const login = asyncErrorHandler(async (req, res) => {});

module.exports = { signup, login };
