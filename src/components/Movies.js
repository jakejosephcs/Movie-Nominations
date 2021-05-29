import React from 'react';

import Movie from './Movie';

export default function Movies({ movies }) {
  return (
    <div className='movies-container'>
      {movies
        ? movies.map(movie => <Movie key={movie.imdbID} movie={movie} />)
        : null}
    </div>
  );
}
