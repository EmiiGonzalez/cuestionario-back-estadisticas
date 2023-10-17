import { Router } from "express";
import { getDatos, getLastUpdate } from "../controllers/tabla.controller.js";

const router = Router();

router
  .get("/api/estadisticas", getDatos)
  .get("/api/estadisticas/lastUpdate", getLastUpdate);

export default router;
