const express = require("express");
const userRouter = require("./routes/auth.route")
const customError = require("./utils/error")
const errorHandler = require("./routes/errorHandler")
const app = express();


app.use(express.json());

app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  const error = new customError(
    `Couldn't find the route for ${req.originalUrl} on the server`,
    404
  );
  next(error);
});

app.use(errorHandler);
module.exports = app;
