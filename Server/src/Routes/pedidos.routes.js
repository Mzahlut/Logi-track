import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const pedido = await prisma.pedido.create({ data: req.body });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  const pedidos = await prisma.pedido.findMany({
    include: {
      cliente: true,
      asignaciones: {
        include: {
          repartidor: { include: { usuario: true } },
        },
      },
    },
  });
  res.json(pedidos);
});

export default router;
