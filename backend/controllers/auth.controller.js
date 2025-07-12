const asyncErrorHandler = require("../utils/asyncErrorHandler");
const User = require("../models/user.model");
const customError = require("../utils/error");
const sendToken = require("../utils/sendToken");
const jwt = require("jsonwebtoken");
const util = require("util");
const sendMail = require("../utils/send.mail");

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

const logout = asyncErrorHandler(async (req, res, next) => {
  res.cookie("token", "", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
  });

  res.status(200).json({
    success: true,
    message: "You have been logged out successfully",
  });
});

const forgotPassword = asyncErrorHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    const error = new customError(
      "We could not find a user with the given email",
      404
    );
    return next(error);
  }

  const resetToken = user.resetPswrdToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/user/resetPassword/${resetToken}`;

  const message = `We have recieved your request to reset your password\nPlease use the link below to reset your password\n\n${resetUrl}`;

  try {
    await sendMail({
      email: user.email,
      subject: "Shop.uni password reset",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Password resetlink sent to your email",
    });
  } catch (error) {
    user.resetPasswordToken = undefined,
      user.resetPasswordTokenExp = undefined
    await user.save({ validateBeforeSave: false });

    return next(
      new customError(
        "An error occured sending the email, please try again",
        500
      )
    );
  }
});

const protectRoute = asyncErrorHandler(async (req, res, next) => {
  const testToken = req.header.authorization;

  let token;
  if (testToken && testToken.startWith("bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    const error = new customError("Token not found", 401);
    return next(error);
  }

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const user = await User.findById(decodedToken.id);
  if (!user) {
    const error = new customError("User not found", 404);
    return next(error);
  }

  const passwordChanged = await user.isPswrdChanged(decodedToken.iat);

  if (passwordChanged) {
    const error = new customError(
      "Password has been changed recently, please login again",
      401
    );
    next(error);
  }

  req.user = user;
  next();
});

const restrict = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      const error = new customError(
        "You are not allowed to perform this action",
        403
      );
    }
    next();
  };
};

module.exports = {
  signup,
  login,
  protectRoute,
  logout,
  restrict,
  forgotPassword,
};
