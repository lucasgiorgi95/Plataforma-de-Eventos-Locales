'use client'
import EventForm from '@/components/EventForm';
import React from 'react';


const CreateEventPage = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Evento</h1>
      <EventForm />
    </main>
  );
};

export default CreateEventPage;