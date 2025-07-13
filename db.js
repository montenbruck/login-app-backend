// db.js
const mongoose = require('mongoose');

/**
 * Función asíncrona para conectar a la base de datos MongoDB.
 * Utiliza la URI de conexión de las variables de entorno.
 */
const connectDB = async () => {
    try {
        // Usa la URI de conexión directamente desde las variables de entorno
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('La variable de entorno MONGODB_URI no está definida.');
        }
        await mongoose.connect(uri);
        console.log('MongoDB conectado exitosamente!');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB; // Exporta la función para ser usada en server.js
