import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const usuario = await prisma.usuario.create({ data: req.body });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

export default router;
