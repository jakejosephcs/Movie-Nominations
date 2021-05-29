import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider(props) {
  const [nominatedMovies, setNominatedMovies] = useState(
    localStorage.getItem('myNominations') === null
      ? []
      : JSON.parse(localStorage.getItem('myNominations'))
  );

  const addToNominatedList = id => {
    fetch(`https://www.omdbapi.com/?apikey=b52f3d48&type=movie&i=${id}`)
      .then(response => response.json())
      .then(data =>
        setNominatedMovies(nominatedMovies => [...nominatedMovies, data])
      );
  };

  const removeFromNominatedList = id => {
    setNominatedMovies(nominatedMovies =>
      nominatedMovies.filter(m => m.imdbID !== id)
    );
  };

  const lengthOfNominatedList = () => {
    return nominatedMovies.length;
  };

  const isMovieNominated = id => {
    return nominatedMovies.some(movie => movie.imdbID === id);
  };

  useEffect(() => {
    localStorage.setItem('myNominations', JSON.stringify(nominatedMovies));
  }, [nominatedMovies]);

  return (
    <Context.Provider
      value={{
        nominatedMovies,
        addToNominatedList,
        removeFromNominatedList,
        lengthOfNominatedList,
        isMovieNominated,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
