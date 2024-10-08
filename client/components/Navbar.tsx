// components/Navbar.tsx
'use client';

import { useRouter } from 'next/navigation'; // Asegúrate de importar desde 'next/navigation'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleCreateEvent = () => {
    router.push('/events/create'); // Redirige a la página de creación de eventos
  };

 

  return (
    <nav className="bg-transparent to-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
        <h1 className="text-white text-xl font-bold">
          Eventos
        </h1>
        </a>
        <div>
          <button 
            onClick={handleCreateEvent} 
            className="border bg-transparent text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Crear Evento
          </button>
         
          </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Cerrar' : 'Menu'}
        </button>
      </div>

      {/* Menú responsive */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4">
          <button 
            onClick={handleCreateEvent} 
            className="border bg-transparent text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Crear Evento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
