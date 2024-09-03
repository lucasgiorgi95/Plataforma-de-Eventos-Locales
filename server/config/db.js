// bd.js
const mongoose = require('mongoose');

const DB_URI = 'mongodb://127.0.0.1:27017/event_platform'; // Cambiado a 127.0.0.1

const connect = () => {
    return mongoose.connect(DB_URI)
        .then(() => {
            console.log('Conexión correcta a MongoDB');
        })
        .catch(err => {
            console.error('Error de conexión a MongoDB:', err);
            throw err; // Propaga el error
        });
};

module.exports = connect;
