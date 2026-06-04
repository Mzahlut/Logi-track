import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const repartidor = await prisma.repartidor.create({ data: req.body });
    res.json(repartidor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const repartidores = await prisma.repartidor.findMany({
    include: { usuario: true, asignaciones: true },
  });
  res.json(repartidores);
});

export default router;
