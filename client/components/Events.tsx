// Events.tsx
'use client'
import React, { useEffect, useState } from "react";
import { getEventsSort, deleteEvent as deleteEventApi, updateEvent } from "../utils/api"; 
import EventCard from "./EventCard";
import EventModal from "./EventModal"; 
import { Event } from "../types/types";

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [sort, setSort] = useState<string>("asc");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const fetchEvents = async (sort: string) => {
    const data = await getEventsSort(sort);
    if (Array.isArray(data)) {
      setEvents(data);
    } else {
      console.error("Data received is not an array:", data);
      setEvents([]);
    }
  };

  useEffect(() => {
    fetchEvents(sort);
  }, [sort]);

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    await deleteEventApi(id);
    fetchEvents(sort);
  };

  const handleSave = async (updatedEvent: Event) => {
    await updateEvent(updatedEvent._id, updatedEvent); // Pasa el ID del evento
    fetchEvents(sort);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Eventos</h1>
      <div className="mb-6">
        <label className="mr-2">Ordenar por:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="asc">Título (A-Z)</option>
          <option value="desc">Título (Z-A)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <EventModal
        isOpen={isModalOpen}
        event={selectedEvent}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Events;
