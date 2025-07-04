const express = require("express");
const dotenv = require("dotenv");
const app = require("./app");
const connectToDb =  require("./config/db")
dotenv.config();

connectToDb()
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
      console.log(`Server connected to port successfully`)
});
