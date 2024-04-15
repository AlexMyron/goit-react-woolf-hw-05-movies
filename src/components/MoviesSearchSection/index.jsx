import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import MovieSearch from '../MovieSearch';
import css from './MoviesSearchSection.module.css';

import { getMoviesByName } from '../../services/api';

const MoviesSearchSection = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const getMovies = async query => {
    try {
      const movies = await getMoviesByName(query);
      setMovies(movies.results);
    } catch (err) {
      console.error('Failed to fetch movies:', err);
    }
  };

  const handleSearch = query => {
    setSearchParams({ query: query });
    getMovies(query);
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    getMovies(query);
  }, [searchParams]);

  return (
    <div className={css.wrapper}>
      <MovieSearch onSearch={handleSearch} />
      <div>
        {movies &&
          movies.map(({ title, id }) => (
            <Link
              className={css.link}
              to={`/movies/${id}`}
              state={{ query: searchParams.get('query') }}
              key={id}
            >
              - {title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MoviesSearchSection;
