import { useState } from 'react';
import { ChildOne } from './ChildOne';
import { ChildTwo } from './ChildTwo';
import { IContextData, MyContext } from '../context/MyContext';

export const ParentComponent = () => {
  const [data, setData] = useState<IContextData>({
    myNumber: 0,
    myText: '',
    setText: (newText: string, data: IContextData) =>
      setData({ ...data, myText: newText }),
    incNumber: (data: IContextData) =>
      setData({ ...data, myNumber: data.myNumber + 1 }),
    decNumber: (data: IContextData) =>
      setData({ ...data, myNumber: data.myNumber - 1 }),
  });

  return (
    <div>
      <div className="max-w-md mx-auto border border-slate-400 rounded-lg bg-red-200 mt-2">
        <h2 className="text-2xl font-semibold py-2 text-center">
          Komponentas tėvas
        </h2>
        <div className="flex gap-3 p-2">
          <input
            className="py-2 px-2 border border-slate-300 rounded-md"
            id="parent-input"
            type="text"
            // onChange={(e) => setData({ ...data, myText: e.target.value })}
            onChange={(e) => data.setText(e.target.value, data)}
            onBlur={(e) => (e.target.value = '')}
          />
          <button
            // onClick={() => setData({ ...data, myNumber: data.myNumber + 1 })}
            onClick={() => data.incNumber(data)}
            className="p-2 bg-sky-900 hover:bg-sky-700 text-slate-50 rounded-full text-3xl"
          >
            👍
          </button>
          <button
            onClick={() => data.decNumber(data)}
            className="p-2 bg-sky-900 hover:bg-sky-700 text-slate-50 rounded-full text-3xl"
          >
            👎
          </button>
        </div>
        <div className="p-2">
          <p>
            Skaicius:{' '}
            <span className="text-xl font-semibold">{data.myNumber}</span>
          </p>
          <p>
            Tekstas:{' '}
            <span className="text-xl font-semibold">{data.myText}</span>
          </p>
        </div>
      </div>
      <MyContext.Provider value={data}>
        <div className="mx-auto flex gap-3">
          <ChildOne />
          <ChildTwo />
        </div>
      </MyContext.Provider>
    </div>
  );
};
