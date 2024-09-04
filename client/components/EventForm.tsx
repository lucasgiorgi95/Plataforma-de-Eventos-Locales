// 'use client'
// import React, { useState } from "react";
// import { createEvent } from "../utils/api"; // Importar la función para crear eventos
// import DatePicker from "react-datepicker"; // Importar un selector de fecha
// import "react-datepicker/dist/react-datepicker.css"; // Importar estilos de react-datepicker
// import { Event } from "../types/types"; // Asegúrate de importar el tipo Event

// const EventForm: React.FC = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState<Date | null>(null);
//   const [startTime, setStartTime] = useState<string>("");
//   const [endTime, setEndTime] = useState<string>("");
//   const [location, setLocation] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validaciones
//     if (!title || !description || !date || !startTime || !endTime || !location) {
//       setError("Por favor, completa todos los campos.");
//       return;
//     }

//     // Crear el evento
//     const newEvent: Event = {
//       title,
//       description,
//       date: date, // La fecha ya es un objeto Date
//       startTime,
//       endTime,
//       location,
//       attendees: [],
//       _id: "",
//     };

//     try {
//       await createEvent(newEvent); // Llamar a la función para crear el evento
//       // Mostrar alerta y redirigir
//       alert("Evento creado con éxito.");
//       window.location.href = "/"; // Redirigir a la página de inicio

//       // Limpiar el formulario después de crear el evento
//       setTitle("");
//       setDescription("");
//       setDate(null);
//       setStartTime("");
//       setEndTime("");
//       setLocation("");
//       setError(""); // Resetear error
//     } catch (error) {
//       console.error("Error al crear el evento:", error);
//       setError("Error al crear el evento. Verifica los datos ingresados.");
//     }
//   };

//   const handleCancel = () => {
//     window.location.href = "/"; // Redirigir a la página de inicio
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">Crear Evento</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="mb-4">
//         <label className="block mb-1">Título:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="border p-2 w-full"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Descripción:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="border p-2 w-full"
//           required
//         />
//       </div>
//       <div className="flex mb-4"> {/* Usamos Flexbox para alinear el calendario y las horas */}
//         <div className="flex-grow">
//           <label className="block mb-1">Fecha:</label>
//           <DatePicker
//             selected={date}
//             onChange={(date: Date | null) => setDate(date)} // date debe ser un objeto Date
//             inline
//             className="border p-2 w-full"
//             required
//           />
//         </div>
//         {date && ( // Solo mostrar los selectores de hora si se ha elegido una fecha
//           <div className="ml-4">
//             <label className="block mb-1">Hora de Inicio:</label>
//             <input
//               type="time"
//               value={startTime}
//               onChange={(e) => setStartTime(e.target.value)}
//               className="border p-2"
//               required
//             />
//             <label className="block mb-1 mt-2">Hora de Fin:</label>
//             <input
//               type="time"
//               value={endTime}
//               onChange={(e) => setEndTime(e.target.value)}
//               className="border p-2"
//               required
//             />
//           </div>
//         )}
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Ubicación:</label>
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="border p-2 w-full"
//           required
//         />
//       </div>
//       <div className="flex justify-between">
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Crear Evento
//         </button>
//         <button
//           type="button"
//           onClick={handleCancel}
//           className="bg-gray-500 text-white py-2 px-4 rounded"
//         >
//           Cancelar
//         </button>
//       </div>
//     </form>
//   );
// };

// export default EventForm;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date || !startTime || !endTime || !location) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    // Aquí iría la lógica para crear el evento
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit} className="container bg-gradient-to-r from-blue-500 to-teal-500 text-white border border-gray-300 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Crear Evento</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-4">
        <label className="block mb-2">Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
        />
      </div>
      <div className="flex mb-4 space-x-4">
        <div className="flex-grow">
          <label className="block mb-2">Fecha:</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
          />
        </div>
        <div className="flex-grow">
          <label className="block mb-2">Hora de Inicio:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
          />
        </div>
        <div className="flex-grow">
          <label className="block mb-2">Hora de Fin:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Ubicación:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
          Crear Evento
        </button>
        <button type="button" onClick={handleCancel} className="bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg transform hover:scale-105 transition-transform">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EventForm;

