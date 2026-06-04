import express from "express";
import {
  crearPedido,
  listarPedidos,
} from "../controllers/pedidos.controller.js";
import { verificarToken } from "../middlewares/auth.middleware.js";
import { verificarRol } from "../middlewares/roles.middleware.js";

const router = express.Router();

// Solo CLIENTE puede crear pedidos
router.post("/", verificarToken, verificarRol(["CLIENTE"]), crearPedido);

// CLIENTE y REPARTIDOR pueden listar pedidos
router.get(
  "/",
  verificarToken,
  verificarRol(["CLIENTE", "REPARTIDOR"]),
  listarPedidos,
);

export default router;
