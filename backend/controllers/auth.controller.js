const asyncErrorHandler = require("../utils/asyncErrorHandler");

const signup = asyncErrorHandler(async (req, res) => {});
const login = asyncErrorHandler(async (req, res) => {});

module.exports = { signup, login };
