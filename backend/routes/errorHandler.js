const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";
  const message = error.message || "something went wrong";

  res.status(statusCode).json({
    status,
    message,
    ...(process.env.NODE_ENV === "development" && {
      stackTrace: error.stack,
    }),
  });
};

module.exports = errorHandler;
