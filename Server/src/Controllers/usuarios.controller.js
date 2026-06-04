import prisma from "../prisma.js";

// Crear usuario
export const crearUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    const usuario = await prisma.usuario.create({
      data: { nombre, email, password, rol },
    });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar usuarios
export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: { pedidos: true, repartidor: true },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
