import { useGameContext } from '../context/GameContext';

export const GameResult = () => {
  const gameData = useGameContext();

  return (
    <div className="max-w-[230px] mx-auto my-3">
      <div className="m-3">
        {gameData.names.map((name) => (
          <div
            onClick={() => gameData.removeName(name, gameData)}
            className="flex justify-between cursor-pointer hover:bg-slate-100 p-2 border-l border-r border-b border-slate-400 first:rounded-t-md first:border-t last:rounded-b-md"
            key={name}
          >
            <div>{name}</div>
            <div>❌</div>
          </div>
        ))}
      </div>
      {gameData.names.length > 1 && (
        <button
          onClick={() => gameData.setStep(2, gameData)}
          type="button"
          className="w-full p-2 rounded-md bg-slate-500 hover:bg-slate-600 text-slate-50"
        >
          Išrinkti nugalėtoją
        </button>
      )}
    </div>
  );
};
