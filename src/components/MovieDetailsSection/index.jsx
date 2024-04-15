import { useLocation } from 'react-router-dom';

import Button from 'components/Button';

import css from './MovieDetailsSection.module.css';
import default_movie_image from '../../images/default_movie_image.webp';

const MovieDetailsSection = ({
  movie: {
    poster_path,
    title,
    overview,
    genres,
    release_date,
    vote_average,
    id,
  },
}) => {
  const location = useLocation();

  const genresList = genres.map(genre => genre.name).join(', ');

  return (
    <div className={css.movieContainer}>
      <div className={css.poster}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : default_movie_image
          }
          alt={title}
        />
      </div>
      <div className={css.details}>
        <h2>{title}</h2>
        <p className={css.overview}>{overview}</p>
        <p>
          <strong>Genres:</strong> {genresList}
        </p>
        <p>
          <strong>Release Date:</strong>{' '}
          {new Date(release_date).toLocaleDateString()}
        </p>
        <p>
          <strong>Rating:</strong> {vote_average} / 10
        </p>

        <div className={css['link-bar']}>
          <Button to={`/movies/${id}/cast`} state={location.state}>
            Cast
          </Button>
          <Button to={`/movies/${id}/reviews`} state={location.state}>
            Reviews
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSection;
