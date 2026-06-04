import prisma from "../prisma.js";

export const crearRepartidor = async (req, res) => {
  try {
    const { usuarioId, vehiculo, disponible } = req.body;
    const repartidor = await prisma.repartidor.create({
      data: { usuarioId, vehiculo, disponible },
    });
    res.json(repartidor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listarRepartidores = async (req, res) => {
  try {
    const repartidores = await prisma.repartidor.findMany({
      include: { usuario: true, asignaciones: true },
    });
    res.json(repartidores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
