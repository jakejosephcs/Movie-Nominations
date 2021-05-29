import React, { useState, useEffect } from 'react';

import Search from '../components/Search';
import Movies from '../components/Movies';
import Pagnation from '../components/Pagnation';

export default function Main() {
  const [query, setQuery] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=b52f3d48&type=movie&s=${query.trim()}&page=${page}`
    )
      .then(response => response.json())
      .then(data => {
        setAllMovies(data.Search);
        setTotalResults(data.totalResults);
        setIsLoading(false);
      });
  }, [query, page]);

  return (
    <main>
      <Search query={query} setQuery={setQuery} />
      <p className='search-results container'>
        {query ? `Results for "${query}"` : null}
      </p>
      {isLoading ? (
        <div className='dots-1 container'></div>
      ) : (
        <>
          {allMovies ? (
            <>
              <Movies movies={allMovies} />
              <Pagnation
                page={page}
                setPage={setPage}
                totalResults={totalResults}
              />
            </>
          ) : null}
        </>
      )}
    </main>
  );
}
