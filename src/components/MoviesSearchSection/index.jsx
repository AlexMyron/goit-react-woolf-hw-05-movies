import { useCallback, useEffect, useState } from 'react';

import MovieSearch from '../MovieSearch';
import css from './MoviesSearchSection.module.css';

import { getMoviesByName } from '../../services/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesSearchSection = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const [_, setSearchParams] = useSearchParams();

  const getMovies = useCallback(
    async query => {
      setQuery(query);
      setSearchParams({ query: query });
      try {
        const movies = await getMoviesByName(query);
        setMovies(movies.results);
      } catch (err) {
        console.error('Failed to fetch movies:', err);
      }
    },
    [setSearchParams]
  );
  const handleSearch = query => {
    getMovies(query);
  };

  useEffect(() => {
    location.state?.pageQuery && getMovies(location.state.pageQuery);
  }, [location, getMovies]);

  let searchResult;

  if (!movies) searchResult = '';
  else if (movies.length)
    searchResult = movies.map(({ title, id }) => (
      <Link
        className={css.link}
        to={`/movies/${id}`}
        state={{ query, from: '/movies' }}
        key={id}
      >
        - {title}
      </Link>
    ));
  else searchResult = <p>There are no movies found...</p>;

  return (
    <div className={css.wrapper}>
      <MovieSearch onSearch={handleSearch} />
      <div>{searchResult}</div>
    </div>
  );
};

export default MoviesSearchSection;
