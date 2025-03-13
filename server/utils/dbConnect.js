import mongoose from "mongoose";
import config from "config";

const DB_URL = config.get("DB_URL");

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("server is connected");
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
