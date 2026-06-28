const express = require('express');
const app = express();
const connectDB = require('./config/db');
const partidosRouter = require('./routes/partidos');

app.use(express.json());

connectDB();

app.use('/partidos', partidosRouter);

const PORT = process.env.PORT || 3000;

// Exportamos 'app' para poder hacer testing
module.exports = { app };

// Iniciar el servidor solo si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}
