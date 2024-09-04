// // EventCard.tsx
// import { FC } from 'react';
// import { Event } from '@/types/types'; 

// interface EventCardProps {
//   event: Event;
//   onEdit: (event: Event) => void;  // Añadir la propiedad onEdit
//   onDelete: (id: string) => void;   // Añadir la propiedad onDelete
// }

// const EventCard: FC<EventCardProps> = ({ event, onEdit, onDelete }) => {
//   const handleDelete = (id: string) => {
//     // Mostrar alerta de confirmación
//     const confirmDelete = window.confirm("¿Seguro que quieres eliminar este evento?");
//     if (confirmDelete) {
//       onDelete(id); // Si el usuario confirma, ejecutar la función onDelete
//     }
//   };

//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold">{event.title}</h2>
//       <p>{event.description}</p>
//       <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
//       <p className="text-sm text-gray-500">{event.location}</p>
//       <div className="mt-4">
//         <button onClick={() => onEdit(event)} className="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2">
//           Editar Evento
//         </button>
//         <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white py-1 px-3 rounded-md">
//           Eliminar Evento
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import { FC } from 'react';
import { Event } from '@/types/types';

interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: string) => void;
}

const EventCard: FC<EventCardProps> = ({ event, onEdit, onDelete }) => {
  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este evento?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{event.title}</h2>
        <p className="mt-2">{event.description}</p>
        <p className="text-sm mt-4">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-sm">{event.location}</p>
      </div>
      <div className=" p-4 flex justify-end space-x-2">
        <button onClick={() => onEdit(event)} className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
          Editar
        </button>
        <button onClick={() => handleDelete(event._id)} className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default EventCard;
