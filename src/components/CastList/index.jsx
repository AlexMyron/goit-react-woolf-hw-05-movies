import styles from './CastList.module.css';
import default_cast_image from '../../images/default_cast_image.webp';

const CastList = ({ castList }) => {
  return (
    <div className={styles.castContainer}>
      {castList.map(({ id, profile_path, name, character }) => (
        <div key={id} className={styles.castMember}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : default_cast_image
            }
            alt={name}
            className={styles.profileImage}
            loading="lazy"
          />
          <div>
            <p className={styles.characterName}>{character}</p>
            <p className={styles.actorName}>{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastList;
