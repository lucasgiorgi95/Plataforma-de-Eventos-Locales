// EventCard.tsx
import { FC } from 'react';
import { Event } from '@/types/types'; 

interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;  // Añadir la propiedad onEdit
  onDelete: (id: string) => void;   // Añadir la propiedad onDelete
}

const EventCard: FC<EventCardProps> = ({ event, onEdit, onDelete }) => {
  const handleDelete = (id: string) => {
    // Mostrar alerta de confirmación
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este evento?");
    if (confirmDelete) {
      onDelete(id); // Si el usuario confirma, ejecutar la función onDelete
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p>{event.description}</p>
      <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-500">{event.location}</p>
      <div className="mt-4">
        <button onClick={() => onEdit(event)} className="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2">
          Editar Evento
        </button>
        <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white py-1 px-3 rounded-md">
          Eliminar Evento
        </button>
      </div>
    </div>
  );
};

export default EventCard;
