const asyncErrorHandler = require("../utils/asyncErrorHandler");
const User = require("../models/user.model");
const customError = require("../utils/error");
const sendToken = require("../utils/sendToken");

const signup = asyncErrorHandler(async (req, res, next) => {
  const { username, fullname, email, password } = req.body;
  if (!username || !fullname || !email || !password) {
    const error = new customError("All fields are required", 400);
    return next(error);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error = new customError("User already exist with this email", 400);
    return next(error);
  }

  const user = await User.create({
    fullname,
    username,
    email,
    password,
  });

  sendToken(user, res, "User registered successfully");
});

const login = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const error = new customError("All fields are required", 404);
    next(error);
  }

  const user = await User.findOne({ email }).select("+password");
  console.log(user);

  const isPswrdMatch = await user.comparePswrd(password, user.password);
  if (!user || !isPswrdMatch) {
    const error = new customError("invalid email or password");
    return next(error);
  }

  sendToken(user, res, "user logined succefully");
});

const protectRoute = () => {
  const testToken = req.header.authorization;
  if (testToken && testToken.startWith("bearer")) {
    const token = testToken.split(" ")[1];
  }
};

module.exports = { signup, login, protectRoute };
