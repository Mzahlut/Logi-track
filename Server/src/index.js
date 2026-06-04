import express from "express";
import "dotenv/config";
import usuariosRouter from "./routes/usuarios.routes.js";
import pedidosRouter from "./routes/pedidos.routes.js";
import repartidoresRouter from "./routes/repartidores.routes.js";
import asignacionesRouter from "./routes/asignaciones.routes.js";

const app = express();
app.use(express.json());

// Routes
app.use("/usuarios", usuariosRouter);
app.use("/pedidos", pedidosRouter);
app.use("/repartidores", repartidoresRouter);
app.use("/asignaciones", asignacionesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
