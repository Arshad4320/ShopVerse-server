import mongoose from "mongoose";
import config from "./index";

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string, {
      serverSelectionTimeoutMS: 20000,
    });
    console.log("✅ Database Connected Successfully");
  } catch (err) {
    console.error("❌ Failed to connect MongoDB:", err);
    process.exit(1);
  }
};

export default connectDB;
