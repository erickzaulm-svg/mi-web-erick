"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Carcasa({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    // Sincroniza la hora local de Apodaca/Monterrey
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('es-MX', { timeZone: 'America/Monterrey', hour12: true }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center font-sans p-4 bg-[url('/fondo.png')] bg-cover bg-center bg-fixed">
      
      {/* Contenedor principal Frutiger Aero */}
      <div className="w-[1000px] h-[720px] flex gap-4 p-4 rounded-3xl text-cyan-900 relative">
        
        {/* === TUS STICKERS / GIFS FUERA DEL MARCO === */}
        <img 
          src="/rei.gif" 
          alt="Rei Ayanami" 
          className="absolute -bottom-16 -left-20 w-48 h-auto z-50 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform cursor-pointer"
        />

        <img 
          src="/jojo-menacing.gif" 
          alt="Jojo Menacing" 
          className="absolute -top-12 -right-10 w-32 h-auto z-50 drop-shadow-xl hover:scale-110 transition-transform pointer-events-none"
        />
        {/* =========================================== */}

        {/* --- COLUMNA 1: MENÚ LATERAL --- */}
        <nav className="w-1/4 h-full flex flex-col gap-4 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_24px_0_rgba(31,38,135,0.2)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-2xl"></div>
          
          <div className="flex items-center justify-center pb-3 border-b border-white/50 relative z-10">
            <h2 className="text-lg font-extrabold text-cyan-800 tracking-wide drop-shadow-sm">SITEMAP</h2>
          </div>
          
          <ul className="space-y-3 relative z-10 flex-1 mt-2">
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Sobre Mí', path: '/about' },
              { name: 'Música', path: '/musica' },
              { name: 'Galería', path: '/galeria' },
              { name: 'Videojuegos', path: '/juegos' }
            ].map((item) => (
              <li key={item.name}>
                {/* Usamos Link de Next.js para navegar sin recargar la página */}
                <Link href={item.path} className="w-full text-left px-4 py-2 rounded-xl bg-gradient-to-b from-white/90 to-white/50 border border-white/80 shadow-sm hover:shadow-md hover:from-white hover:to-cyan-100 transition-all text-cyan-800 font-bold flex justify-between items-center group block">
                  <span>{item.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500">✦</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- COLUMNA 2: EL HUECO PARA LAS PÁGINAS --- */}
        <main className="w-2/4 h-full bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-[0_4px_24px_0_rgba(31,38,135,0.2)] overflow-y-auto relative">
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-2xl"></div>
           
           <div className="relative z-10">
              {/* Aquí es donde se inyectarán las páginas (Inicio, Música, etc.) */}
              {children}
           </div>
        </main>

        {/* --- COLUMNA 3: PANEL DERECHO (STATUS Y MÚSICA) --- */}
        <aside className="w-1/4 h-full flex flex-col gap-4 relative z-10">
          
          {/* Tarjeta de Status */}
          <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-[0_4px_24px_0_rgba(31,38,135,0.2)] relative overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
            <h2 className="text-sm font-extrabold border-b border-white/50 pb-2 mb-3 text-center text-cyan-800 relative z-10">SYSTEM STATUS</h2>
            
            <div className="relative z-10 text-sm flex flex-col gap-2 bg-white/40 p-3 rounded-xl shadow-inner border border-white/50 font-medium">
              <div className="flex justify-between border-b border-white/40 pb-1">
                <span className="font-bold text-cyan-900">User:</span> <span>Erick Zaul</span>
              </div>
              <div className="flex justify-between border-b border-white/40 pb-1">
                <span className="font-bold text-cyan-900">Loc:</span> <span>Apodaca, NL</span>
              </div>
              {/* Reloj digital */}
              <div className="flex justify-center mt-2 py-2 bg-black/10 rounded-lg border border-white/30 shadow-inner">
                <span className="font-mono font-extrabold text-cyan-900 tracking-widest text-lg drop-shadow-md">
                  {time}
                </span>
              </div>
            </div>
          </div>

          {/* Reproductor de Música (Disco) */}
          <div className="flex-1 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-4 shadow-[0_4px_24px_0_rgba(31,38,135,0.2)] relative overflow-hidden flex flex-col">
            <h2 className="text-sm font-extrabold border-b border-white/50 pb-2 mb-3 text-center text-cyan-800 relative z-10">NOW PLAYING</h2>
            
            <div className="flex-1 bg-white/40 rounded-xl shadow-inner border border-white/50 flex items-center justify-center flex-col text-center p-2 relative z-10">
               <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-400 via-gray-100 to-gray-500 mb-3 shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-white animate-[spin_4s_linear_infinite] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-2 rounded-full border border-gray-500/20"></div>
                 <div className="absolute inset-5 rounded-full border border-gray-500/30"></div>
                 <div className="absolute inset-8 rounded-full border border-gray-500/20"></div>
                 <div className="w-6 h-6 rounded-full bg-white/60 border border-gray-400 shadow-inner z-10 backdrop-blur-sm"></div>
               </div>
               
               <p className="text-base font-extrabold text-cyan-900 w-full truncate">Nights</p>
               <p className="text-xs uppercase font-bold tracking-wider opacity-80 text-cyan-800 mt-1">Frank Ocean</p>
            </div>
          </div>
        </aside>

        {/* === AUDIO INVISIBLE === */}
        {/* Asegúrate de tener una canción llamada "cancion.mp3" en la carpeta public */}
        <audio src="/Frank Ocean - Nights.mp3" autoPlay loop className="hidden" />

      </div>
    </div>
  );
}