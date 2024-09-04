import axios from 'axios';
import { Event } from '../types/types';



// URL base de la API, asegurándose de no duplicar la ruta
const API_URL = 'http://localhost:3001';


// Configuración de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const getEventsSort = async (sort: string): Promise<Event[]> => {
  const response = await api.get(`/api/events?sort=${sort}`); // Asegúrate de que la URL sea correcta
  return response.data;
};

// Función para obtener todos los eventos
export const getEvents = async () => {
  const response = await api.get('/api/events'); // Asegúrate de que este endpoint sea correcto
  return response.data;
};

// Función para obtener un evento por ID
export const getEventById = async (id: string) => {
  const response = await api.get(`/api/events/${id}`); // Asegúrate de que este endpoint sea correcto
  return response.data;
};

// Función para crear un nuevo evento
export const createEvent = async (event: Event) => {
  const response = await api.post('/api/events', event); // Asegúrate de que este endpoint sea correcto
  return response.data;
};

export const updateEvent = async (id: string, event: Event) => {
  const response = await api.put(`/api/events/${id}`, event);
  return response.data;
};

// Función para eliminar un evento
export const deleteEvent = async (id: string) => {
  const response = await api.delete(`/api/events/${id}`); // Asegúrate de que este endpoint sea correcto
  return response.data;
};
