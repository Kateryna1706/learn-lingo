import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Container } from './App.styled';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const HomePage = lazy(() => import('pages/Home'));
const TeachersPage = lazy(() => import('pages/Teachers'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const currentUser = {
          name: user.displayName,
          email: user.email,
        };
        setCurrentUser(currentUser);
      } else {
        setCurrentUser({
          name: '',
          email: '',
        });
      }
    });
  }, []);

  console.log(currentUser);

  return (
    <Container>
      <Navigation
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
