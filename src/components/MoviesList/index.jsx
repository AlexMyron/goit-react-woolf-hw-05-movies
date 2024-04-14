import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <div className={css['movies-container']}>
      {movies &&
        movies.map(({ id, name, poster_path, title }) => (
          <Link to={`movies/${id}`} key={id} className={css['movie-item']}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
