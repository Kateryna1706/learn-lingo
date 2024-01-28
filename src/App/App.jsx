import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import { Container } from './App.styled';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth, FilterContex } from 'context';
import PrivateRoute from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const TeachersPage = lazy(() => import('pages/Teachers'));
const FavoritesPage = lazy(() => import('pages/Favorites'));

export const App = () => {
  const [filter, setFilter] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    setCurrentUser({
      name: '',
      email: '',
    });
    setIsLoggedIn(false);
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('hidden');
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const newUser = {
          name: user.displayName,
          email: user.email,
        };
        setCurrentUser(newUser);
        setIsLoggedIn(true);
      } else {
        setCurrentUser({
          name: '',
          email: '',
        });
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <Auth.Provider value={{ currentUser, isLoggedIn }}>
      <FilterContex.Provider value={filter}>
        <Container>
          <Navigation
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            logOut={logOut}
          />

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/catalog"
                element={<TeachersPage changeFilter={changeFilter} />}
              />
              <Route
                path="/favorites"
                element={
                  <PrivateRoute
                    redirectTo="/catalog"
                    component={<FavoritesPage changeFilter={changeFilter} />}
                  />
                }
              />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </Container>
      </FilterContex.Provider>
    </Auth.Provider>
  );
};
