import express from "express";
import {
  crearAsignacion,
  listarAsignaciones,
} from "../controllers/asignaciones.controller.js";
import { verificarRol } from "../middlewares/roles.middleware.js";

const router = express.Router();

// Solo ADMIN puede crear asignaciones
router.post("/", verificarRol(["ADMIN"]), crearAsignacion);

// Solo REPARTIDOR puede listar sus asignaciones
router.get("/", verificarRol(["REPARTIDOR"]), listarAsignaciones);

export default router;
