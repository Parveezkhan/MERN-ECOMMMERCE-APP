const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Database Started...");
  } catch (error) {
    console.log(`MongoDB error:${error}`);
  }
};

module.exports = connectDB;
