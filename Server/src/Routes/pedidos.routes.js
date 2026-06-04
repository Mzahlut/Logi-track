import express from "express";
import {
  crearPedido,
  listarPedidos,
} from "../Controllers/pedidos.controller.js";

const router = express.Router();

router.post("/", crearPedido);
router.get("/", listarPedidos);

export default router;
