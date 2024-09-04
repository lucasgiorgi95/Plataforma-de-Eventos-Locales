const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Obtener todos los eventos (opcionalmente ordenados)
router.get('/', async (req, res) => {
  const { sort } = req.query; // Obtener el parámetro de consulta
  let sortOptions = {};

  // Define las opciones de ordenamiento según el parámetro recibido
  if (sort === 'asc') {
    sortOptions = { title: 1 }; // Ordenar A-Z
  } else if (sort === 'desc') {
    sortOptions = { title: -1 }; // Ordenar Z-A
  } 

  try {
    const events = await Event.find().sort(sortOptions); // Obtener y ordenar eventos
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo evento
router.post('/', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    startTime: req.body.startTime, // Asegúrate de incluir startTime
    endTime: req.body.endTime,       // Asegúrate de incluir endTime
    location: req.body.location,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener un evento por ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Evento no encontrado' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Eliminar un evento
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Evento no encontrado' });

    await Event.deleteOne({ _id: req.params.id });
    res.json({ message: 'Evento eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar un evento
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Evento no encontrado' });

    event.title = req.body.title || event.title;
    event.description = req.body.description || event.description;
    event.date = req.body.date || event.date;
    event.location = req.body.location || event.location;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
