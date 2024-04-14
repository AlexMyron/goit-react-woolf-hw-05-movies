import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CastList from 'components/CastList';

import { getMovieCast } from 'services/api';

const Cast = () => {
  const [castData, setCastData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { cast } = await getMovieCast(moviesId);
        setCastData(cast);
      } catch ({ message }) {
        setErrorMessage(message || 'Something went wrong...');
      }
    };
    getData();
  }, [moviesId]);

  const content = errorMessage ? (
    <p>{errorMessage}</p>
  ) : (
    castData && <CastList castList={castData} />
  );

  return <>{content}</>;
};

export default Cast;
