const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }, // Fecha del evento
  startTime: { type: String, required: true }, // Hora de inicio
  endTime: { type: String, required: true },   // Hora de fin
  location: { type: String, required: true },
  attendees: { type: [String], default: [] }, // Array de IDs de usuarios que asistirán
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
