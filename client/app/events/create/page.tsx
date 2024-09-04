'use client'
import EventForm from '@/components/EventForm';
import Navbar from '@/components/Navbar';
import React from 'react';


const CreateEventPage = () => {
  return (
    <main className=" mx-auto p-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <Navbar/>
      <EventForm />
    </main>
  );
};

export default CreateEventPage;