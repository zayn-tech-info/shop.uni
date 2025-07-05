const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error) {
      console.log(`An error occured: ${error.message}`)
      process.exit(1)
      return
  }
};

module.exports = connectToDb