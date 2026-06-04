import express from "express";
import {
  crearAsignacion,
  listarAsignaciones,
} from "../controllers/asignaciones.controller.js";

const router = express.Router();

router.post("/", crearAsignacion);
router.get("/", listarAsignaciones);

export default router;
