import { useState } from 'react';
import { ParentComponent } from './components/ParentComponent';
import { GameParrent } from './components/GameParrent';

function App() {
  const [zaidimas, setZaidimas] = useState(true);

  return (
    <main>
      <div className="flex gap-4 items-center justify-center my-2">
        <button
          type="button"
          className={`${
            !zaidimas ? 'bg-slate-300' : 'bg-slate-500 hover:bg-slate-600'
          } font-semibold uppercase  py-1 px-2 rounded-md text-slate-50`}
          onClick={() => setZaidimas(false)}
          disabled={!zaidimas}
        >
          React context pavyzdys
        </button>
        <button
          type="button"
          className={`${
            zaidimas ? 'bg-slate-300' : 'bg-slate-500 hover:bg-slate-600'
          } font-semibold uppercase  py-1 px-2 rounded-md text-slate-50`}
          disabled={zaidimas}
          onClick={() => setZaidimas(true)}
        >
          Žaidimas
        </button>
      </div>
      <h2 className="text-center uppercase font-semibold p-3">
        {zaidimas
          ? 'Tipo žaidimas "Kas apmokės sąskaitą?"'
          : 'React context pavyzdys'}
      </h2>
      <div className="max-w-4xl mx-auto">
        {zaidimas ? <GameParrent /> : <ParentComponent />}
      </div>
    </main>
  );
}

export default App;
