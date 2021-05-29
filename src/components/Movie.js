import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import ShowMore from './ShowMore';

export default function Movie({ movie }) {
  const {
    nominatedMovies,
    addToNominatedList,
    removeFromNominatedList,
    isMovieNominated,
  } = useContext(Context);

  const [isMovieNominatedState, setIsMovieNominatedState] = useState(
    isMovieNominated(movie.imdbID)
  );

  const [isShowMoreActive, setIsShowMoreActive] = useState(false);

  const toggleNomination = () => {
    if (isMovieNominated(movie.imdbID)) {
      removeFromNominatedList(movie.imdbID);
      setIsMovieNominatedState(false);
    } else {
      addToNominatedList(movie.imdbID);
      setIsMovieNominatedState(true);
    }
  };

  return (
    <div
      className='movie'
      style={{
        background: `linear-gradient(to right, rgba(15, 32, 39, 0.8), rgba(32, 58, 67, 0.5), rgba(44, 83, 100, 0.8)), url(${movie.Poster})`,
      }}
    >
      {isShowMoreActive ? (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='more'
          onClick={() => setIsShowMoreActive(prevState => !prevState)}
        >
          <path
            d='M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM14.75 12.543C14.9336 12.7266 14.9336 13.0234 14.75 13.207L13.2031 14.75C13.0195 14.9336 12.7227 14.9336 12.5391 14.75L10 12.1875L7.45703 14.75C7.27344 14.9336 6.97656 14.9336 6.79297 14.75L5.25 13.2031C5.06641 13.0195 5.06641 12.7227 5.25 12.5391L7.8125 10L5.25 7.45703C5.06641 7.27344 5.06641 6.97656 5.25 6.79297L6.79688 5.24609C6.98047 5.0625 7.27734 5.0625 7.46094 5.24609L10 7.8125L12.543 5.25C12.7266 5.06641 13.0234 5.06641 13.207 5.25L14.7539 6.79688C14.9375 6.98047 14.9375 7.27734 14.7539 7.46094L12.1875 10L14.75 12.543Z'
            fill='#004C3F'
          />
        </svg>
      ) : (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='more'
          onClick={() => setIsShowMoreActive(prevState => !prevState)}
        >
          <path
            d='M19.6875 10C19.6875 15.3514 15.3499 19.6875 10 19.6875C4.65012 19.6875 0.3125 15.3514 0.3125 10C0.3125 4.65168 4.65012 0.3125 10 0.3125C15.3499 0.3125 19.6875 4.65168 19.6875 10ZM10.26 3.51562C8.13117 3.51562 6.77344 4.41238 5.70727 6.00617C5.56914 6.21266 5.61535 6.49113 5.81332 6.64125L7.16875 7.66898C7.37207 7.82316 7.66176 7.78648 7.81973 7.58609C8.51754 6.70102 8.99602 6.18777 10.0581 6.18777C10.8561 6.18777 11.8432 6.70137 11.8432 7.4752C11.8432 8.0602 11.3603 8.36063 10.5723 8.80238C9.65344 9.3175 8.4375 9.95863 8.4375 11.5625V11.7188C8.4375 11.9776 8.64738 12.1875 8.90625 12.1875H11.0938C11.3526 12.1875 11.5625 11.9776 11.5625 11.7188V11.6667C11.5625 10.5549 14.812 10.5086 14.812 7.5C14.812 5.2343 12.4618 3.51562 10.26 3.51562V3.51562ZM10 13.2031C9.00918 13.2031 8.20312 14.0092 8.20312 15C8.20312 15.9908 9.00918 16.7969 10 16.7969C10.9908 16.7969 11.7969 15.9908 11.7969 15C11.7969 14.0092 10.9908 13.2031 10 13.2031Z'
            fill='#A8EB12'
            className={`${isMovieNominatedState ? 'nominated' : 'nominate'}`}
          />
        </svg>
      )}

      <p className='year'>{movie.Year}</p>
      <p className='title'>{movie.Title}</p>
      <button
        onClick={toggleNomination}
        disabled={nominatedMovies.length === 5}
        className={isMovieNominatedState ? 'nominated' : 'nominate'}
      >
        {isMovieNominatedState ? 'Nominated' : 'Nominate'}
      </button>
      {isShowMoreActive ? <ShowMore movie={movie} /> : null}
    </div>
  );
}
