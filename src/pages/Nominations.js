import React, { useContext } from 'react';
import Nominee from '../components/Nominee';

import { Context } from '../Context';

export default function Nominations() {
  const { nominatedMovies } = useContext(Context);

  return (
    <main className="nominations-container">
      {nominatedMovies.map(nominatedMovie => (
        <Nominee key={nominatedMovie.imdbID} movie={nominatedMovie} />
      ))}
    </main>
  );
}
