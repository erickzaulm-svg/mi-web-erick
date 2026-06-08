"use client";
import { useState, useEffect } from 'react';

export default function Juegos() {
  // --- LÓGICA DEL MOTOR DEL JUEGO ---
  const [isJumping, setIsJumping] = useState(false);
  const [isFalling, setIsFalling] = useState(false); 
  const [dinoBottom, setDinoBottom] = useState(0); 
  const [obstacleLeft, setObstacleLeft] = useState(100); 
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  
  // NUEVO: Estado para la animación de correr (alterna entre 1 y 2)
  const [runFrame, setRunFrame] = useState(1);

  // Bucle de Animación (Sprite Runner)
  useEffect(() => {
    let animLoop: NodeJS.Timeout;
    
    // Solo animamos si el juego corre, no has perdido, y estás en el suelo
    if (gameStarted && !gameOver && !isJumping) {
      animLoop = setInterval(() => {
        setRunFrame((prev) => (prev === 1 ? 2 : 1));
      }, 150); // Cambia de imagen cada 150ms (puedes bajarlo a 100 si quieres que corra más rápido visualmente)
    }
    
    return () => clearInterval(animLoop);
  }, [gameStarted, gameOver, isJumping]);

  // Bucle principal del juego (Curva de dificultad)
  useEffect(() => {
    let gameLoop: NodeJS.Timeout;
    
    if (gameStarted && !gameOver) {
      let currentSpeed = 1.2; 
      
      if (score >= 1000) {
        currentSpeed = 3.0; 
      } else if (score >= 800) {
        currentSpeed = 2.6; 
      } else if (score >= 600) {
        currentSpeed = 2.2; 
      } else if (score >= 400) {
        currentSpeed = 1.8; 
      } else if (score >= 200) {
        currentSpeed = 1.5; 
      }

      gameLoop = setInterval(() => {
        setObstacleLeft((prev) => {
          if (prev <= -10) {
            setScore((s) => s + 10); 
            return 100; 
          }
          return prev - currentSpeed; 
        });
      }, 20); 
    }
    
    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver, score]); 

  // Colisiones
  useEffect(() => {
    if (obstacleLeft > 5 && obstacleLeft < 15 && dinoBottom < 40) {
      setGameOver(true);
      setGameStarted(false);
    }
  }, [obstacleLeft, dinoBottom]);

  // Físicas del salto
  const jump = () => {
    if (!gameStarted && !gameOver) setGameStarted(true);
    if (gameOver) {
      setGameOver(false);
      setScore(0);
      setObstacleLeft(100);
      setGameStarted(true);
      return;
    }
    
    if (!isJumping) {
      setIsJumping(true);
      setIsFalling(false);
      setDinoBottom(140); 
      
      setTimeout(() => {
        setIsFalling(true); 
        setDinoBottom(0);
      }, 360);
      
      setTimeout(() => {
        setIsJumping(false);
        setIsFalling(false);
      }, 610);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault(); 
        jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isJumping, gameStarted, gameOver]);
  // ----------------------------------

  // NUEVO: Lógica para decidir qué imagen mostrar
  // Si está saltando, muestra el sprite de salto. Si no, alterna entre run1 y run2
  const personajeSrc = isJumping 
    ? '/personaje-jump.png' 
    : `/personaje-run${runFrame}.png`;

  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1 text-cyan-900 drop-shadow-md">Zona Gaming</h1>
      <hr className="border-white/60 mb-3" />
      
      {/* Sección de Nicknames */}
      <div className="bg-white/50 rounded-2xl p-3 mb-4 shadow-sm border border-white/60">
        <h2 className="text-sm font-bold text-cyan-900 drop-shadow-sm mb-2">¡Agrega para jugar! 🎮</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-blue-900/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-blue-900 text-[10px]">ST</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Steam</p><h4 className="font-extrabold text-cyan-900 text-xs">ErickZaul</h4></div></div>
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-green-600/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-green-700 text-[10px]">XB</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Xbox</p><h4 className="font-extrabold text-cyan-900 text-xs">ErickZaul</h4></div></div>
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-indigo-600/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-indigo-700 text-[10px]">DC</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Discord</p><h4 className="font-extrabold text-cyan-900 text-xs">erick.zaul</h4></div></div>
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-red-600/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-red-700 text-[10px]">RG</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Riot</p><h4 className="font-extrabold text-cyan-900 text-xs">ErickZaul#LAS</h4></div></div>
        </div>
      </div>

      {/* MINIJUEGO */}
      <h3 className="font-extrabold text-cyan-800 mb-2 drop-shadow-sm text-sm flex justify-between items-center">
        <span>ARCADE ROOM</span>
        <span className="text-xs bg-cyan-900 text-white px-2 py-1 rounded-full shadow-inner">Score: {score}</span>
      </h3>
      
      <div 
        className="bg-white/30 backdrop-blur-sm rounded-2xl border-2 border-white/60 h-48 shadow-inner relative overflow-hidden cursor-pointer"
        onClick={jump}
      >
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center z-30 font-extrabold text-cyan-900 bg-white/40 backdrop-blur-[2px] hover:bg-white/20 transition-colors text-sm">
            Presiona ESPACIO o haz clic para empezar
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 font-bold text-red-700 bg-red-100/60 backdrop-blur-[2px]">
            <span className="text-2xl font-extrabold drop-shadow-sm">¡GAME OVER!</span>
            <span className="text-sm text-red-900 mt-1 font-black">Puntuación: {score}</span>
            <span className="text-[10px] text-red-800 mt-1 uppercase tracking-widest">Haz clic para reiniciar</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-900/30 z-10"></div>

        {/* === TU PERSONAJE ANIMADO === */}
        <img 
          src={personajeSrc}
          alt="Jugador"
          className={`absolute left-[10%] bottom-0 w-12 h-12 z-20 object-contain transition-transform ${isFalling ? 'duration-[250ms] ease-in' : 'duration-[300ms] ease-out'}`}
          style={{ transform: `translateY(-${dinoBottom}px)` }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        {/* Cuadro de respaldo por si fallan las imágenes */}
        <div 
          className={`hidden absolute left-[10%] bottom-0 w-10 h-10 bg-gradient-to-tr from-cyan-600 to-cyan-400 rounded-md shadow-md border-2 border-white transition-transform ${isFalling ? 'duration-[250ms] ease-in' : 'duration-[300ms] ease-out'} z-20`}
          style={{ transform: `translateY(-${dinoBottom}px)` }}
        ></div>

        {/* === EL OBSTÁCULO === */}
        <img 
          src="/enemigo.png"
          alt="Obstáculo"
          className="absolute bottom-0 w-10 h-10 z-20 object-contain"
          style={{ left: `${obstacleLeft}%` }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div 
          className="hidden absolute bottom-0 w-8 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-t-md border-2 border-red-900 shadow-sm z-20"
          style={{ left: `${obstacleLeft}%` }}
        ></div>

      </div>
    </>
  );
}