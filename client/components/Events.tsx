'use client'
import React, { useEffect, useState } from "react";
import { getEventsSort, deleteEvent as deleteEventApi, updateEvent } from "../utils/api"; 
import EventCard from "./EventCard";
import EventModal from "./EventModal"; 
import { Event } from "../types/types";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [sort, setSort] = useState<string>("asc");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());

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

  // Filtra eventos recientes y antiguos
  const recentEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  // Encuentra el evento del día o el más cercano
  const today = new Date();
  const eventOfTheDay = events.find(event => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === today.toDateString();
  });

  const closestEvent = recentEvents.reduce((closest, event) => {
    const eventDate = new Date(event.date);
    return (!closest || eventDate < new Date(closest.date)) ? event : closest;
  }, null as Event | null);

  const heroEvent = eventOfTheDay || closestEvent;

  return (
    <div className="container mx-auto p-6">
      {heroEvent && (
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 mb-8 rounded-lg shadow-lg">
          <div className="flex items-center ">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Próximo Evento</h2>
              <h3 className="text-2xl font-semibold mb-2">{heroEvent.title}</h3>
              <p className="text-lg mb-4">{new Date(heroEvent.date).toLocaleDateString()}</p>
              <p className="text-lg">{heroEvent.description}</p>
            </div>
            <div className="flex-shrink-0">
              <Calendar
                value={date}
                tileClassName={({ date }) => {
                  // Marcar el día del evento en el calendario
                  if (date.toDateString() === new Date(heroEvent.date).toDateString()) {
                    return 'bg-red-500 text-black';
                  }
                  return null;
                }}
                tileDisabled={({ date }) => {
                  // Deshabilitar la selección de todas las fechas excepto el día del evento
                  return date.toDateString() !== new Date(heroEvent.date).toDateString();
                }}
                prev2Label={null} next2Label={null} prevLabel={null} nextLabel={null}
              />
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 text-end">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border bg-transparent text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option className="bg-transparent text-black" value="asc">Título (A-Z)</option>
          <option className="bg-transparent text-black" value="desc">Título (Z-A)</option>
        </select>
      </div>

      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Eventos Recientes</h2>
          {recentEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <p className="text-lg">No hay eventos recientes.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Eventos Antiguos</h2>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <p className="text-lg">No hay eventos antiguos.</p>
          )}
        </section>
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
