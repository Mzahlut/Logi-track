import prisma from "../prisma.js";

// Crear pedido
export const crearPedido = async (req, res) => {
  try {
    const { clienteId, direccionEntrega, estado, fechaEntrega } = req.body;
    const pedido = await prisma.pedido.create({
      data: {
        clienteId,
        direccionEntrega,
        estado,
        fechaEntrega,
      },
    });
    res.json(pedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar pedidos con relaciones
export const listarPedidos = async (req, res) => {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        cliente: true,
        asignaciones: {
          include: {
            repartidor: {
              include: { usuario: true },
            },
          },
        },
      },
    });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
