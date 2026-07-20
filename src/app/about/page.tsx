export default function SobreMi() {
  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-2xl mx-auto text-cyan-950">
      
      {/* Foto arriba, centrada y con tamaño ajustado */}
      <div className="w-full flex justify-center">
        <div className="w-64 h-80 bg-white/50 backdrop-blur-sm border-2 border-white rounded-2xl shadow-xl flex items-center justify-center overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
          <img src="/tu-foto.jpg" alt="Erick Zaul" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <p className="font-mono text-xs bg-cyan-900/10 px-4 py-1 rounded-full uppercase tracking-widest">
        Erick Zaul // 2026
      </p>

      {/* Texto abajo, ocupando todo el ancho disponible */}
      <div className="w-full space-y-4">
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
          <h1 className="text-3xl font-black mb-3 tracking-tight">Sobre Mí</h1>
          <p className="leading-relaxed opacity-90">
            Hola, soy Erick. Desarrollador web, entusiasta de la tecnología y estudiante de Comunicación en la UANL. 
            Construyo mundos digitales usando React y Next.js, buscando siempre ese equilibrio entre funcionalidad técnica y una estética inmersiva.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50">
            <h3 className="font-bold mb-2 text-cyan-900">Stack Tecnológico</h3>
            <p className="text-sm opacity-80">
              Next.js, React, Tailwind CSS, Java, ASP.NET Core MVC y SQL.
            </p>
          </div>
          
          {/* Sección de Intereses corregida para evitar el error de hidratación */}
          <div className="bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50">
            <h3 className="font-bold mb-2 text-cyan-900">Intereses</h3>
            <div className="text-sm opacity-80 space-y-1">
              <div>- Tigres UANL</div>
              <div>- Videojuegos con amigos</div>
              <div>- Animes como: Evangelion, JoJos, Attack on Titan</div>
              <div>- Peliculas que me transmitan sentimiento (No se aceptan devoluciones, Your Name, etc) o que esten cotorras como las de los minions je...</div>
            </div>
          </div>
        </div>
        
        <div className="bg-cyan-900/10 p-4 rounded-xl border border-cyan-900/20 font-mono text-sm text-center">
          <p>» Egresado de la EIAO (Bulldog)</p>
          <p>» Actual: Facultad de Ciencias de la Comunicación (UANL)</p>
        </div>
      </div>
    </div>
  );
}