const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri || mongoUri.includes("<db_password>")) {
    console.warn(
      "MongoDB connection skipped: MONGO_URI is missing or still contains a placeholder."
    );
    return false;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed. Falling back to in-memory storage.");
    console.error(error.message);
    return false;
  }
};

const isDatabaseConnected = () => mongoose.connection.readyState === 1;

module.exports = {
  connectDB,
  isDatabaseConnected,
};
