import { useMyContext } from '../context/MyContext';

export const ChildOne = () => {
  const myData = useMyContext();

  return (
    <div className="max-w-md mx-auto border border-slate-400 rounded-lg bg-emerald-300 mt-2">
      <h2 className="text-2xl font-semibold py-2 text-center">
        Komponentas vaikas 1
      </h2>
      <div className="flex gap-3 p-2">
        <input
          className="py-2 px-2 border border-slate-300 rounded-md"
          id="child-one-input"
          type="text"
          onBlur={(e) => (e.target.value = '')}
          onChange={(e) => myData.setText(e.target.value, myData)}
        />
        <button
          onClick={() => myData.incNumber(myData)}
          className="p-2 bg-sky-900 hover:bg-sky-700 text-slate-900 rounded-full text-3xl"
        >
          👍
        </button>
        <button
          onClick={() => myData.decNumber(myData)}
          className="p-2 bg-sky-900 hover:bg-sky-700 text-slate-50 rounded-full text-3xl"
        >
          👎
        </button>
      </div>
      <div className="p-2">
        <p>
          Skaicius:{' '}
          <span className="text-xl font-semibold">{myData?.myNumber}</span>
        </p>
        <p>
          Tekstas:{' '}
          <span className="text-xl font-semibold">{myData?.myText}</span>
        </p>
      </div>
    </div>
  );
};
