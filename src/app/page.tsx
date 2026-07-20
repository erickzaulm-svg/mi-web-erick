export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mb-2 text-cyan-900 drop-shadow-md">Bienvenido a mi Espacio</h1>
      <hr className="border-white/60 mb-4" />
      
      <div className="bg-white/50 rounded-xl p-4 mb-4 shadow-inner border border-white/40 text-sm text-cyan-900">
        <p className="mb-2"><strong>¡Hola!</strong> Aquí iré documentando mis proyectos, código y cosas que me gustan.</p>
        <p>Actualmente enfocado en desarrollo con <strong>React, Next.js y TypeScript</strong>.</p>
        <p>En esta web veras mas que nada todo lo que me gusta y apasiona, fue hecha por y para mi, por pura diversion</p>
        <p>si te gusta lo que ves Bienvenido seas :p</p>
      </div>

      <h3 className="font-bold text-cyan-800 mb-2 mt-6 drop-shadow-sm">Proyectos Recientes</h3>
      
      <div className="grid grid-cols-2 gap-3 text-cyan-900">
        <div className="bg-gradient-to-br from-white/80 to-white/40 p-3 rounded-xl border border-white/60 shadow-sm cursor-pointer hover:scale-105 transition-transform">
          <h4 className="font-bold text-sm">Lispor</h4>
          <p className="text-xs opacity-80 mt-1 font-medium">Plataforma educativa</p>
        </div>
        <div className="bg-gradient-to-br from-white/80 to-white/40 p-3 rounded-xl border border-white/60 shadow-sm cursor-pointer hover:scale-105 transition-transform">
          <h4 className="font-bold text-sm">Barber Shop Web</h4>
          <p className="text-xs opacity-80 mt-1 font-medium">Sitio comercial UI</p>
        </div>
      </div>
    </>
  );
}