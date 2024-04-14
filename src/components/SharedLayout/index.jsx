import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default SharedLayout;
