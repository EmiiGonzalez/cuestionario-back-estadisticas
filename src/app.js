
import express from "express";
import cors from "cors";
import router from "./routes/estadisticasRoutes.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const app = express();


app.use(express.json());
app.use(cors());
app.use(router);

export default app;