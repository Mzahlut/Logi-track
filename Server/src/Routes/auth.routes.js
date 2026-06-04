import express from "express";
import { registrar, login } from "../controllers/auth.controller.js";
import { verificarToken } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register", registrar);
router.post("/login", login);

router.get("/perfil", verificarToken, (req, res) => {
  res.json({ mensaje: "Acceso permitido", usuario: req.user });
});

export default router;
