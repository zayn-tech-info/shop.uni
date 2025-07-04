const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
      console.log(`Server connected to port successfully`)
});
