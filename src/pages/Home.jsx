import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList';
import { getTrendList } from 'services/api';

const Home = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getTrendList();

        setMoviesList(results);
      } catch (err) {
        setErrorMessage(err.message);
      }
    };
    getMovies();
  }, []);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return <section>{moviesList && <MoviesList movies={moviesList} />}</section>;
};

export default Home;
