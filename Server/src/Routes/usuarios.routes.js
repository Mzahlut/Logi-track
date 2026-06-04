import express from "express";
import {
  crearUsuario,
  listarUsuarios,
} from "../controllers/usuarios.controller.js";

const router = express.Router();

router.post("/", crearUsuario);
router.get("/", listarUsuarios);

export default router;
