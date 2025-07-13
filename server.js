require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de ejemplo (puedes importar tus rutas reales aquí)
// app.use('/api/auth', require('./src/routes/auth.routes'));
// app.use('/api/users', require('./src/routes/user.routes'));

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
