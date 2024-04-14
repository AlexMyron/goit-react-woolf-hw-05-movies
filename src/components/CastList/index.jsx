import styles from './CastList.module.css';

const CastList = ({ castList }) => {
  return (
    <div className={styles.castContainer}>
      {castList.map(({ id, profile_path, name, character }) => (
        <div key={id} className={styles.castMember}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
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
