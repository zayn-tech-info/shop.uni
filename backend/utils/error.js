class customError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 5000;
    this.status = statusCode >= 400 && statusCode <= 500 ? "fail" : "error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = customError;