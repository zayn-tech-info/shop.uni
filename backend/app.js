const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")


const userRouter = require("./routes/auth.route")
const customError = require("./utils/error")
const errorHandler = require("./routes/errorHandler")

const app = express();


app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

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
