// server.js
const express = require('express');
const initDb = require('./config/db'); // Asegúrate de que la ruta sea correcta
const app = express();

const port = 3001;

// Middleware para manejar JSON (si es necesario)
app.use(express.json());

const eventRouter = require('./routes/events');
app.use('/api/events', eventRouter); // Asegúrate de agregar un prefijo a las rutas

// Inicializa la base de datos y luego inicia el servidor
initDb().then(() => {
    app.listen(port, () => {
        console.log(`La app está en línea en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('No se pudo iniciar el servidor:', err);
});
