"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const AIDarkComponent = () => {
  const [started, setStarted] = useState(false);

  // TODO: replace this placeholder with your WhatsApp number (international format, no + or spaces)
  const WHATSAPP_NUMBER = '549000000000';
  const WHATSAPP_TEXT = 'Hola, quiero más información sobre 9M AI';

  const handleStart = () => {
    setStarted(true);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
    setTimeout(() => setStarted(false), 3000);
  };

  return (
    <div id="contacto" className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
        {/* Barra superior con gradiente */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
        
        <div className="p-8 md:p-12">
          {/* Encabezado */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="9M Logo"
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
            </h1>
            <div className="text-blue-300 text-xl md:text-2xl font-medium leading-relaxed max-w-5xl mx-auto p-5 rounded-xl bg-blue-900/10 border-l-4 border-blue-500">
              No esperes más. Hoy puedes comenzar a generar ingresos mientras la IA trabaja para ti
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-8">
            <p className="text-center text-gray-200 text-xl md:text-2xl leading-relaxed p-6 rounded-2xl  mx-auto max-w-4xl">
              Regístrate hoy y forma parte del sistema financiero impulsado por IA que ya está cambiando vidas
            </p>
            
            <div className="text-center text-blue-300 italic text-lg p-4 max-w-3xl mx-auto">
              <p>Si tienes dudas, contáctanos: nuestro equipo te ayudará en cada paso</p>
            </div>

            {/* Línea divisoria */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent max-w-3xl mx-auto"></div>

            {/* Botón único - Grande y central */}
            <div className="flex justify-center pt-6">
              <button 
                className="relative group py-5 px-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-blue-500/50 overflow-hidden"
                onClick={handleStart}
              >
                <span className="relative z-10">EMPEZAR AHORA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {started && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-sm px-4 py-2 rounded-full animate-pulse">
                    ¡Redirigiendo!
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Efectos de fondo sutiles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AIDarkComponent;