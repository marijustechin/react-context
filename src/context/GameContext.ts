import { createContext, useContext } from 'react';

export interface IGameContext {
  step: number;
  names: string[];
  setStep: (stepNumber: number, gameData: IGameContext) => void;
  addName: (newName: string, gameData: IGameContext) => void;
  removeName: (oldName: string, gameData: IGameContext) => void;
  reset: () => void;
}

export const GameContext = createContext<IGameContext | undefined>(undefined);

export const useGameContext = () => {
  const gameData = useContext(GameContext);

  if (!gameData)
    throw new Error(
      'GameContext.provider turi būti naudojams su pradiniais duomenimis'
    );

  return gameData;
};
