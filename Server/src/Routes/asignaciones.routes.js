import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const asignacion = await prisma.asignacion.create({ data: req.body });
    res.json(asignacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const asignaciones = await prisma.asignacion.findMany({
    include: { pedido: true, repartidor: { include: { usuario: true } } },
  });
  res.json(asignaciones);
});

export default router;
