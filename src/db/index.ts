import mongoose from "mongoose";
import { env } from "../utils/envValidation";

export const connectDb = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Connected to Database.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
