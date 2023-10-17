import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const connectDB = mongoose.connect(
  process.env.URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }
  
)

export default connectDB