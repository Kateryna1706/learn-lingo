import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/Home'));
const CarsPage = lazy(() => import('pages/Cars'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

export const App = () => {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CarsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
