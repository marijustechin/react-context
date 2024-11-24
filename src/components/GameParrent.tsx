import { useState } from 'react';
import { GameContext, IGameContext } from '../context/GameContext';
import { GameForm } from './GameForm';
import { GameResult } from './GameResult';
import { GameWinner } from './GameWinner';

export const GameParrent = () => {
  const [gameData, setGameData] = useState<IGameContext>({
    step: 1,
    names: [],
    setStep: (stepNumber: number, gameData: IGameContext) =>
      setGameData({ ...gameData, step: stepNumber }),
    addName: (newName: string, gameData: IGameContext) =>
      setGameData({ ...gameData, names: [...gameData.names, newName] }),
    removeName: (oldName: string, gameData: IGameContext) =>
      setGameData({
        ...gameData,
        names: [...gameData.names.filter((name) => name !== oldName)],
      }),
    reset: () => setGameData({ ...gameData, names: [], step: 1 }),
  });

  return (
    <div className="max-w-xl mx-auto">
      <GameContext.Provider value={gameData}>
        <div className={`${gameData.step === 1 ? 'block' : 'hidden'}`}>
          <GameForm />
          <GameResult />
        </div>
        <div className={`${gameData.step === 1 ? 'hidden' : 'block'}`}>
          <GameWinner />
        </div>
        {/* {gameData.step === 1 ? (
          <div>
            <GameForm />
            <GameResult />
          </div>
        ) : (
          <div>
            <GameWinner />
          </div>
        )} */}
      </GameContext.Provider>
    </div>
  );
};
