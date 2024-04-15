import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import MovieSearch from '../MovieSearch';
import css from './MoviesSearchSection.module.css';

import { getMoviesByName } from '../../services/api';

const MoviesSearchSection = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');

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
  };

  useEffect(() => {
    if (!queryParam) return;

    getMovies(queryParam);
  }, [searchParams, queryParam]);

  return (
    <div className={css.wrapper}>
      <MovieSearch onSearch={handleSearch} />
      <div>
        {movies &&
          movies.map(({ title, id }) => (
            <Link
              className={css.link}
              to={`/movies/${id}`}
              state={{ from: `/movies?query=${queryParam}` }}
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
