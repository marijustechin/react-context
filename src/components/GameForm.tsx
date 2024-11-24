import { useState } from 'react';
import { useGameContext } from '../context/GameContext';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInputs {
  name: string;
}

export const GameForm = () => {
  const gameData = useGameContext();
  const [duplicate, setDuplicate] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (gameData.names.includes(data.name)) {
      setDuplicate(`${data.name} jau žaidžia. Pasirinkite kitą vardą`);
    } else {
      gameData.addName(data.name, gameData);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-rose-500 text-sm text-center items-center w-full h-6 p-1">
        {errors.name && <p>Pamiršote įvesti žaidėjo vardą</p>}
        {duplicate && <p>{duplicate}</p>}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2">
        <input
          className="max-w-xs p-2 border border-slate-400 rounded-md"
          id="name"
          type="text"
          autoComplete="on"
          placeholder="Žaidėjo vardas"
          {...register('name', {
            required: true,
            onChange: () => setDuplicate(''),
          })}
        />

        <button
          className="p-2 rounded-md bg-slate-500 hover:bg-slate-600 text-slate-50"
          type="submit"
        >
          Pridėti žaidėją
        </button>
      </div>
    </form>
  );
};
