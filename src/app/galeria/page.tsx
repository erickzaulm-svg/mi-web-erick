"use client";
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function Galeria() {
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Truco para evitar errores de renderizado en el servidor (SSR) con Next.js
  useEffect(() => {
    setMounted(true);
    // Ocultar el scroll del sistema principal para que no haya doble barra
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Coordenadas esparcidas por todo el ancho real del monitor (100vw)
  // Aumentamos el tamaño de las fotos (w-72, w-80, w-96) porque ahora hay mucho espacio
  const fotos = [
    { id: 1, src: "/placeholder1.png", alt: "Sticker 1", style: "top-[2%] left-[5%] -rotate-6 w-64 z-50", isPolaroid: false },
    { id: 2, src: "/placeholder2.jpg", alt: "Foto 2", style: "top-[4%] left-[25%] rotate-12 w-80 z-20", isPolaroid: true },
    { id: 3, src: "/placeholder3.jpg", alt: "Foto 3", style: "top-[3%] left-[55%] -rotate-6 w-96 z-10", isPolaroid: true },
    { id: 4, src: "/placeholder4.jpg", alt: "Foto 4", style: "top-[8%] left-[78%] rotate-3 w-80 z-30", isPolaroid: true },
    { id: 5, src: "/placeholder5.png", alt: "Sticker 5", style: "top-[15%] left-[12%] -rotate-6 w-56 z-50", isPolaroid: false },
    { id: 6, src: "/placeholder6.jpg", alt: "Foto 6", style: "top-[18%] left-[40%] rotate-6 w-80 z-20", isPolaroid: true },
    { id: 7, src: "/placeholder7.jpg", alt: "Foto 7", style: "top-[20%] left-[70%] -rotate-12 w-72 z-20", isPolaroid: true },
    { id: 8, src: "/placeholder8.jpg", alt: "Foto 8", style: "top-[28%] left-[8%] rotate-6 w-[22rem] z-10", isPolaroid: true },
    { id: 9, src: "/placeholder9.jpg", alt: "Foto 9", style: "top-[30%] left-[32%] -rotate-3 w-80 z-30", isPolaroid: true },
    { id: 10, src: "/placeholder10.png", alt: "Sticker 10", style: "top-[32%] left-[62%] rotate-12 w-48 z-50", isPolaroid: false },
    { id: 11, src: "/placeholder11.jpg", alt: "Foto 11", style: "top-[36%] left-[80%] -rotate-6 w-80 z-30", isPolaroid: true },
    { id: 12, src: "/placeholder12.jpg", alt: "Foto 12", style: "top-[42%] left-[15%] rotate-3 w-96 z-20", isPolaroid: true },
    { id: 13, src: "/placeholder13.png", alt: "Sticker 13", style: "top-[46%] left-[48%] -rotate-12 w-56 z-50", isPolaroid: false },
    { id: 14, src: "/placeholder14.jpg", alt: "Foto 14", style: "top-[48%] left-[72%] rotate-6 w-[22rem] z-10", isPolaroid: true },
    { id: 15, src: "/placeholder15.jpg", alt: "Foto 15", style: "top-[56%] left-[5%] -rotate-6 w-80 z-30", isPolaroid: true },
    { id: 16, src: "/placeholder16.png", alt: "Sticker 16", style: "top-[58%] left-[35%] rotate-12 w-56 z-50", isPolaroid: false },
    { id: 17, src: "/placeholder17.jpg", alt: "Foto 17", style: "top-[60%] left-[60%] -rotate-3 w-80 z-40", isPolaroid: true },
    { id: 18, src: "/placeholder18.jpg", alt: "Foto 18", style: "top-[68%] left-[82%] rotate-6 w-[22rem] z-20", isPolaroid: true },
    { id: 19, src: "/placeholder19.png", alt: "Sticker 19", style: "top-[70%] left-[12%] -rotate-12 w-64 z-50", isPolaroid: false },
    { id: 20, src: "/placeholder20.jpg", alt: "Foto 20", style: "top-[73%] left-[42%] rotate-3 w-96 z-30", isPolaroid: true },
    { id: 21, src: "/placeholder21.jpg", alt: "Foto 21", style: "top-[76%] left-[70%] -rotate-6 w-80 z-40", isPolaroid: true },
    { id: 22, src: "/placeholder22.png", alt: "Sticker 22", style: "top-[82%] left-[8%] rotate-12 w-52 z-50", isPolaroid: false },
    { id: 23, src: "/placeholder23.jpg", alt: "Foto 23", style: "top-[85%] left-[30%] -rotate-6 w-[22rem] z-20", isPolaroid: true },
    { id: 24, src: "/placeholder24.jpg", alt: "Foto 24", style: "top-[84%] left-[58%] rotate-3 w-80 z-10", isPolaroid: true },
    { id: 25, src: "/placeholder25.png", alt: "Sticker 25", style: "top-[88%] left-[80%] -rotate-12 w-64 z-50", isPolaroid: false }
  ];

  // Este es el diseño gigante a pantalla completa
  const scrapbookPantallaCompleta = (
    <div className="fixed inset-0 z-[9999] bg-[#0a0f16] overflow-y-auto overflow-x-hidden font-sans">
      
      {/* Botón flotante para regresar y desmontar el portal */}
      <Link href="/" className="fixed top-8 left-8 z-[10000] bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 hover:scale-105 transition-all shadow-xl flex items-center gap-3">
        <span className="text-xl">⬅</span> Volver al Sistema
      </Link>

      <div className="absolute top-12 left-0 w-full text-center z-[9000] pointer-events-none">
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] tracking-tighter">
          SCRAPBOOK
        </h1>
      </div>
      
      {/* Lienzo virtual enorme (3500px de alto) */}
      <div className="relative w-full h-[3500px] mt-40">
        
        {fotos.map((foto) => (
          <div
            key={foto.id}
            onMouseEnter={() => setHoveredId(foto.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`
              absolute transition-all duration-300 ease-out cursor-pointer
              ${foto.style}
              ${hoveredId === foto.id 
                ? 'z-[9500] scale-110 drop-shadow-[0_0_40px_rgba(34,211,238,0.8)] ring-4 ring-cyan-300' 
                : 'grayscale-[15%] opacity-90 hover:grayscale-0'
              }
              ${foto.isPolaroid ? 'bg-white p-5 pb-16 shadow-2xl border border-gray-100' : 'bg-transparent drop-shadow-2xl'}
            `}
          >
            <div className={`relative w-full h-full overflow-hidden ${foto.isPolaroid ? 'bg-gray-800' : 'bg-transparent'}`}>
              <img 
                src={foto.src} 
                alt={foto.alt}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x600/808080/FFFFFF?text=FOTO"; }}
              />
            </div>
            {foto.isPolaroid && (
              <p className="absolute bottom-4 left-6 text-gray-600 font-handwriting text-xl -rotate-2">
                {foto.alt}
              </p>
            )}
          </div>
        ))}

        {/* Estrellas decorativas */}
        <div className="absolute top-[10%] left-[85%] text-8xl opacity-20 -rotate-12 pointer-events-none text-cyan-300">✨</div>
        <div className="absolute top-[35%] left-[8%] text-7xl opacity-10 rotate-12 pointer-events-none text-white">💿</div>
        <div className="absolute top-[65%] left-[80%] text-8xl opacity-20 rotate-45 pointer-events-none text-cyan-300">⭐</div>
        <div className="absolute top-[85%] left-[15%] text-7xl opacity-10 -rotate-6 pointer-events-none text-white">🎸</div>

      </div>
    </div>
  );

  return (
    <>
      {/* Lo que se ve dentro de tu recuadro de cristal */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 p-6">
        <div className="w-20 h-20 bg-cyan-900/20 rounded-full flex items-center justify-center border-2 border-cyan-500/50 mb-2">
          <span className="text-4xl">📸</span>
        </div>
        <h2 className="text-2xl font-extrabold text-cyan-900 drop-shadow-md">Álbum Abierto</h2>
        <p className="text-sm text-cyan-800 font-medium">
          El scrapbook se está mostrando en pantalla completa para una mejor experiencia.
        </p>
      </div>

      {/* Aquí ocurre la magia: El portal inyecta el scrapbook en el body, escapando de la Carcasa */}
      {mounted && createPortal(scrapbookPantallaCompleta, document.body)}
    </>
  );
}