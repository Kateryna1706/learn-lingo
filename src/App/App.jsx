import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/Home'));
const TeachersPage = lazy(() => import('pages/Teachers'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Navigation
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <TeachersPage
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                isModalOpen={isModalOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            }
          />
        </Routes>
      </Suspense>
    </Container>
  );
};
