import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./routes/estadisticasRoutes.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    console.log("Base de datos conectada");

}

connectDB();
const app = express();


app.use(express.json());
app.use(cors());
app.use(router);

export default app;