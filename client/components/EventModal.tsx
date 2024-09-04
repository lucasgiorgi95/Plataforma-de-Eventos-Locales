// EventModal.tsx
import { FC, useEffect, useState } from 'react';
import { Event } from '@/types/types';

interface EventModalProps {
  isOpen: boolean;
  event: Event | null;
  onClose: () => void;
  onSave: (updatedEvent: Event) => void;
}

const EventModal: FC<EventModalProps> = ({ isOpen, event, onClose, onSave }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setDate(event.date);
      setLocation(event.location);
    }
  }, [event]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (event) {
      const updatedEvent = {
        ...event,
        title,
        description,
        date,
        location,
      };
      onSave(updatedEvent);
      onClose(); // Cerrar el modal después de guardar
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h2 className="text-xl font-semibold mb-4">Editar Evento</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Fecha</label>
            <input
              type="date"
              value={date.split('T')[0]} // Formatear la fecha correctamente
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Ubicación</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 rounded-md w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black py-1 px-3 rounded-md mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-1 px-3 rounded-md"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
