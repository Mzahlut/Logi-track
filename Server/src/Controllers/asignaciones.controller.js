import prisma from "../prisma.js";

export const crearAsignacion = async (req, res) => {
  try {
    const { pedidoId, repartidorId } = req.body;
    const asignacion = await prisma.asignacion.create({
      data: { pedidoId, repartidorId },
    });
    res.json(asignacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarAsignaciones = async (req, res) => {
  try {
    const asignaciones = await prisma.asignacion.findMany({
      include: {
        pedido: { include: { cliente: true } },
        repartidor: { include: { usuario: true } },
      },
    });
    res.json(asignaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
