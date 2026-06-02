"use client";
import { useState, useEffect } from 'react';

export default function Juegos() {
  // --- LÓGICA DEL MOTOR DEL JUEGO ---
  const [isJumping, setIsJumping] = useState(false);
  const [dinoBottom, setDinoBottom] = useState(0); 
  const [obstacleLeft, setObstacleLeft] = useState(100); 
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    let gameLoop: NodeJS.Timeout;
    if (gameStarted && !gameOver) {
      gameLoop = setInterval(() => {
        setObstacleLeft((prev) => {
          if (prev <= -10) {
            setScore((s) => s + 10); 
            return 100; 
          }
          return prev - 1.5; 
        });
      }, 20); 
    }
    return () => clearInterval(gameLoop);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (obstacleLeft > 5 && obstacleLeft < 15 && dinoBottom < 40) {
      setGameOver(true);
      setGameStarted(false);
    }
  }, [obstacleLeft, dinoBottom]);

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
      setDinoBottom(120); 
      setTimeout(() => setDinoBottom(0), 250);
      setTimeout(() => setIsJumping(false), 500);
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

  return (
    <>
      <h1 className="text-2xl font-extrabold mb-1 text-cyan-900 drop-shadow-md">Zona Gaming</h1>
      <hr className="border-white/60 mb-3" />
      
      {/* Sección de Nicknames Ultra-Compacta */}
      <div className="bg-white/50 rounded-2xl p-3 mb-4 shadow-sm border border-white/60">
        <h2 className="text-sm font-bold text-cyan-900 drop-shadow-sm mb-2">¡Agrega para jugar! 🎮</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-blue-900/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-blue-900 text-[10px]">ST</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Steam</p><h4 className="font-extrabold text-cyan-900 text-xs">ErickZaul</h4></div></div>
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-green-600/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-green-700 text-[10px]">XB</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Xbox</p><h4 className="font-extrabold text-cyan-900 text-xs">ErickZaul</h4></div></div>
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-indigo-600/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-indigo-700 text-[10px]">DC</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Discord</p><h4 className="font-extrabold text-cyan-900 text-xs">erick.zaul</h4></div></div>
          <div className="bg-white/40 p-2 rounded-xl border border-white/60 flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-red-600/20 border border-white flex items-center justify-center flex-shrink-0"><span className="font-bold text-red-700 text-[10px]">RG</span></div><div><p className="text-[9px] font-bold text-cyan-800 uppercase tracking-wider opacity-70">Riot</p><h4 className="font-extrabold text-cyan-900 text-xs">ErickZaul#LAS</h4></div></div>
        </div>
      </div>

      {/* MINIJUEGO: PROTOTIPO "WHITEBOX" */}
      <h3 className="font-extrabold text-cyan-800 mb-2 drop-shadow-sm text-sm flex justify-between items-center">
        <span>ARCADE ROOM</span>
        <span className="text-xs bg-cyan-900 text-white px-2 py-1 rounded-full shadow-inner">Score: {score}</span>
      </h3>
      
      <div 
        className="bg-white/30 backdrop-blur-sm rounded-2xl border-2 border-white/60 h-48 shadow-inner relative overflow-hidden cursor-pointer"
        onClick={jump}
      >
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center z-20 font-extrabold text-cyan-900 bg-white/40 backdrop-blur-[2px] hover:bg-white/20 transition-colors text-sm">
            Presiona ESPACIO o haz clic para empezar
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 font-bold text-red-700 bg-red-100/60 backdrop-blur-[2px]">
            <span className="text-2xl font-extrabold drop-shadow-sm">¡GAME OVER!</span>
            <span className="text-sm text-red-900 mt-1 font-black">Puntuación: {score}</span>
            <span className="text-[10px] text-red-800 mt-1 uppercase tracking-widest">Haz clic para reiniciar</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-900/30"></div>

        <div 
          className="absolute left-[10%] w-10 h-10 bg-gradient-to-tr from-cyan-600 to-cyan-400 rounded-md shadow-md border-2 border-white transition-all duration-200 ease-in-out z-10"
          style={{ bottom: `${dinoBottom}px` }}
        ></div>

        <div 
          className="absolute bottom-0 w-8 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-t-md border-2 border-red-900 shadow-sm z-10"
          style={{ left: `${obstacleLeft}%` }}
        ></div>
      </div>
    </>
  );
}