import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieById } from 'services/api';

import Loader from 'components/Loader/Loader';
import MovieDetailsSection from 'components/MovieDetailsSection';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { moviesId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getMovieDetailes = async () => {
      try {
        const movie = await getMovieById(moviesId);
        setMovieData(movie);
      } catch (err) {
        setErrorMessage(err.message);
      }
    };
    getMovieDetailes();
  }, [moviesId]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <section>
      <div style={{ padding: '20px' }}>
        <Link
          to={location.state?.from || '/'}
          className="button-back"
        >
          Go Back
        </Link>
      </div>
      {movieData && <MovieDetailsSection movie={movieData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
