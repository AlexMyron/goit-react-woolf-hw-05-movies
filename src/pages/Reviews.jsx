import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewsList from '../components/ReviewsList';

import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');

  const { moviesId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await getMovieReviews(moviesId);
        setReviews(results);
      } catch (err) {
        setError(err.message);
      }
    };

    getReviews();
  }, [moviesId]);

  if (error) return { error };
  else if (reviews?.length) return <ReviewsList reviews={reviews} />;
  else if (reviews?.length === 0) return <p>There are no reviews yet...</p>;
};

export default Reviews;
