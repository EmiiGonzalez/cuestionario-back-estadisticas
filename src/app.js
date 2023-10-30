import express from "express";
import cors from "cors";
import router from "./routes/estadisticasRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: ".env" });
const __filename = fileURLToPath(import.meta.url); // Obtiene la ruta del archivo actual (__filename)
const __dirname = path.dirname(__filename); // Obtiene el directorio actual (__dirname)

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')))

connectDB()

app.use(express.json());
app.use(cors());



app.use(router);

app.use((req, res) => {
    res.redirect('/');
  });
export default app;
