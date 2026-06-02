import Link from 'next/link';

export default function Musica() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-2 text-cyan-900 drop-shadow-md">Mi Hub Musical</h1>
      <hr className="border-white/60 mb-6" />
      
      {/* Tarjeta principal: Perfil de YT Music */}
      <div className="bg-white/50 rounded-2xl p-5 mb-6 shadow-[0_4px_15px_0_rgba(31,38,135,0.1)] border border-white/60 flex items-center gap-4">
        {/* Un circulo simulando tu foto de perfil */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-400 to-red-600 border-2 border-white shadow-md flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-2xl"></span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-cyan-900 drop-shadow-sm">Erick Zaul en YT Music</h2>
          <p className="text-sm text-cyan-800 font-medium opacity-80 mb-2">Escuchando de todo un poco para programar y relajarme.</p>
          <a href="https://music.youtube.com/" target="_blank" rel="noreferrer" className="inline-block px-4 py-1 rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow-md transition-colors">
            Ir a mi perfil
          </a>
        </div>
      </div>

      <h3 className="font-extrabold text-cyan-800 mb-3 drop-shadow-sm text-lg">MIS PLAYLISTS</h3>
      
      {/* Cuadrícula de Playlists (4 elementos perfectos) */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Playlist 1: Sad Sierreño */}
        <a href="https://music.youtube.com/playlist?list=PLHlQVC5ffPTKbscU6kLTFnvj6I3gvwhKx&si=hxclJFuTjF8V0YRo" target="_blank" rel="noreferrer" className="bg-gradient-to-br from-white/80 to-white/40 p-4 rounded-xl border border-white/60 shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer group relative overflow-hidden block">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150"></div>
          <h4 className="font-bold text-cyan-900 text-md">Sad Sierreño</h4>
          <p className="text-xs text-cyan-800 mt-1 font-medium">Para awitarse agusto con unas buenas guitarras.</p>
        </a>

        {/* Playlist 2: Vibras Chill */}
        <a href="https://music.youtube.com/playlist?list=PLHlQVC5ffPTJqNJ7C-GjZ6I0vJM8ANKeR&si=UMnGCRVs3oUUmSjN" target="_blank" rel="noreferrer" className="bg-gradient-to-br from-white/80 to-white/40 p-4 rounded-xl border border-white/60 shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer group relative overflow-hidden block">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150"></div>
          <h4 className="font-bold text-cyan-900 text-md">Vibras Chill</h4>
          <p className="text-xs text-cyan-800 mt-1 font-medium">Frank Ocean, Joji y toda la onda alternativa.</p>
        </a>

        {/* Playlist 3: Cumbias y Vallenatos */}
        <a href="https://music.youtube.com/playlist?list=PLHlQVC5ffPTLz8FXvwT55E_b1zT23fVFB&si=69c3mI9JnUHfWhn8" target="_blank" rel="noreferrer" className="bg-gradient-to-br from-white/80 to-white/40 p-4 rounded-xl border border-white/60 shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer group relative overflow-hidden block">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150"></div>
          <h4 className="font-bold text-cyan-900 text-md">Cumbias & Vallenatos</h4>
          <p className="text-xs text-cyan-800 mt-1 font-medium">El sonido clásico de Nuevo León wepa wepa jeee.</p>
        </a>

        {/* Playlist 4: Corridos Alterados */}
        <a href="https://music.youtube.com/playlist?list=PLHlQVC5ffPTLMUzflYyrtVdFucyZOO66X&si=ZY_sDmGE7ll_atqL" target="_blank" rel="noreferrer" className="bg-gradient-to-br from-white/80 to-white/40 p-4 rounded-xl border border-white/60 shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer group relative overflow-hidden block">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150"></div>
          <h4 className="font-bold text-cyan-900 text-md">Corridos Alterados</h4>
          <p className="text-xs text-cyan-800 mt-1 font-medium">Puro fuego y adrenalina para andar al 100 padrino ya sabe.</p>
        </a>

      </div>
    </>
  );
}