export interface Event {
  _id: string; // Asegúrate de que _id siempre esté definido
  title: string; // Este debe ser requerido
  description: string; // Este debe ser requerido
  date: Date; // Este debe ser requerido
  startTime: string; // Este debe ser requerido
  endTime: string; // Este debe ser requerido
  location: string; // Este debe ser requerido
  attendees?: string[]; // Este puede ser opcional
}
