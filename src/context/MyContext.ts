import { createContext, useContext } from 'react';

export interface IContextData {
  myNumber: number;
  myText: string;
  setText: (newText: string, data: IContextData) => void;
  incNumber: (data: IContextData) => void;
  decNumber: (data: IContextData) => void;
}

export const MyContext = createContext<IContextData | undefined>(undefined);

export const useMyContext = () => {
  const myContext = useContext(MyContext);

  if (!myContext)
    throw new Error(
      'MyContext.Provider turi buti naudojamas su pradiniais duomenimis'
    );

  return myContext;
};
