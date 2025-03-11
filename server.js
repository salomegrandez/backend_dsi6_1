require("dotenv").config();
const express = require("express");
const cors = require("cors");

//obtengo mis rutas
const authRoutes = require("./routes/auth.routes");
const usuarioRoutes = require("./routes/usuario.routes");
const personaRoutes = require("./routes/persona.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req,res) => {
  res.send("BIENVENIDO AL API");
});

app.use("/api", authRoutes);
app.use("/api", usuarioRoutes);
app.use("/api", personaRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
