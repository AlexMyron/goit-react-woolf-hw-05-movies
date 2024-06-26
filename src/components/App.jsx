import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout';

export const App = () => {
  const Home = lazy(() => import('../pages/Home'));
  const Movies = lazy(() => import('../pages/Movies'));
  const MovieDetails = lazy(() => import('../pages/MovieDetails'));
  const Cast = lazy(() => import('../pages/Cast'));
  const Reviews = lazy(() => import('../pages/Reviews'));
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
