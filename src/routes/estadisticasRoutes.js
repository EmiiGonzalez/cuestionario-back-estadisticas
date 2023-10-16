import { Router } from "express";

const router = Router();

router
  .get("/api/estadisticas", async (req, res) => {
    res.send("Estadisticas");
  });

export default router;
