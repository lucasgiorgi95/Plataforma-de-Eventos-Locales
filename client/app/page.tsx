"use client";
import Events from "../components/Events";
import Navbar from "@/components/Navbar";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <Navbar/>
      <Events />
    </div>
  );
};

export default HomePage;
