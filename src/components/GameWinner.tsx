import { useState } from 'react';
import { useGameContext } from '../context/GameContext';

export const GameWinner = () => {
  const gameData = useGameContext();

  const randomNumber = () => {
    return Math.floor(Math.random() * gameData.names.length);
  };

  const [winner, setWinner] = useState(randomNumber);

  return (
    <div className="w-full">
      <p className="text-center text-xl p-2">Sąskaitą apmoka:</p>
      <h2 className="text-4xl font-semibold text-center">
        {gameData.names[winner]}
      </h2>
      <div className="flex gap-3 justify-center my-3">
        <button
          onClick={() => setWinner(randomNumber)}
          type="button"
          className="p-2 rounded-md bg-slate-500 hover:bg-slate-600 text-slate-50"
        >
          Išrinkti kitą
        </button>
        <button
          onClick={gameData.reset}
          type="button"
          className="p-2 rounded-md bg-slate-500 hover:bg-slate-600 text-slate-50"
        >
          Išnaujo
        </button>
      </div>
    </div>
  );
};
