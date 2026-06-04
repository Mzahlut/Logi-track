import express from "express";
import {
  crearRepartidor,
  listarRepartidores,
} from "../controllers/repartidores.controller.js";

const router = express.Router();

router.post("/", crearRepartidor);
router.get("/", listarRepartidores);

export default router;
