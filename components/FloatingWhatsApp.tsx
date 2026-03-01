import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency."
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[999] flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-2xl animate-pulse"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;