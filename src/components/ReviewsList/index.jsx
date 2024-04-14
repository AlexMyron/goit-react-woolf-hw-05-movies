import css from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <div className={css.reviewsContainer}>
      {reviews.map(review => (
        <div key={review.id} className={css.review}>
          <p className={css.author}>By {review.author}</p>
          <p className={css.content}>
            {review.content.substring(0, 200)}...
          </p>
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className={css.readMore}
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
