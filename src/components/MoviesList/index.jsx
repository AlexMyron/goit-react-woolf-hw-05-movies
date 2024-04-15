import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

import defaul_movie_image from '../../images/default_movie_image.webp';

const MoviesList = ({ movies }) => {
  return (
    <div className={css['movies-container']}>
      {movies.map(({ id, name, poster_path, title }) => (
        <Link to={`movies/${id}`} key={id} className={css['movie-item']} state={{ from: '/' }}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaul_movie_image
            }
            alt={name}
            className={css['movie-image']}
            height="385"
            loading="lazy"
          />
          <div className={css['movie-info']}>
            <h3>{name || title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
