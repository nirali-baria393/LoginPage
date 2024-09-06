import mongoose from "mongoose";
import ENV from '../config.js';

async function connect() {
  try {
    const dbUri = ENV.MONGO_URI;

    if (!dbUri) {
      throw new Error("Database URI is not defined");
    }

    console.log("Connecting to:", dbUri);

    mongoose.set('strictQuery', true);

    // Connect to the MongoDB database without the deprecated options
    const db = await mongoose.connect(dbUri);

    console.log("Database Connected");
    return db;
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1);
  }
}

export default connect;
