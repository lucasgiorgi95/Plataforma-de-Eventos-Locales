const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  attendees: { type: [String], default: [] }, // Array de IDs de usuarios que asistirán
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
