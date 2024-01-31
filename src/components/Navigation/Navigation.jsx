import { NavLink } from 'react-router-dom';

import {
  Authorization,
  Button,
  LoginContainer,
  Logo,
  LogoText,
  NavigationContainer,
  NavigationMenu,
  NavigationNav,
  Container,
} from './Navigation.styled';
import { useContext, useEffect, useState } from 'react';
import RegistrationForm from 'components/Forms/RegistrationForm';
import Modal from 'components/Modal/Modal';
import LoginForm from 'components/Forms/LoginForm';
import LogoImg from '../../images/ukraine.jpg';
import { ReactComponent as Login } from '../Icons/log-in-01.svg';
import { ReactComponent as Close } from '../Icons/close.svg';

import { Auth } from 'context';

import { signOut } from 'firebase/auth';
import { auth } from 'firebase-config';

export const Navigation = ({ logOut }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const authContex = useContext(Auth);
  const isLoggedIn = authContex.isLoggedIn;
  const [childrenModal, setChildrenModal] = useState('');
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  const handleClickMenu = () => {
    setIsNavigationOpen(true);
  };

  const handleClickClose = () => {
    setIsNavigationOpen(false);
  };

  const handleClick = event => {
    setIsNavigationOpen(false);

    const value = event.target.innerHTML;

    if (value === 'Registration') {
      setChildrenModal('registration');
    } else {
      setChildrenModal('login');
    }

    setIsModalOpen(true);

    document.body.classList.add('hidden');
  };

  const handleClickLogOut = () => {
    setIsNavigationOpen(false);

    signOut(auth)
      .then(() => {
        logOut();
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      {width < 769 && !isNavigationOpen && (
        <Logo>
          <img src={`${LogoImg}`} alt="Logo" width={28} height={28}></img>
          <LogoText>LearnLingo</LogoText>
        </Logo>
      )}
      {width > 768 || isNavigationOpen ? (
        <NavigationContainer>
          {isNavigationOpen && (
            <Close onClick={handleClickClose} className="close" />
          )}
          {width > 768 && (
            <Logo>
              <img src={`${LogoImg}`} alt="Logo" width={28} height={28}></img>
              <LogoText>LearnLingo</LogoText>
            </Logo>
          )}
          <NavigationNav>
            <NavLink onClick={() => setIsNavigationOpen(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setIsNavigationOpen(false)} to="/catalog">
              Teachers
            </NavLink>
            {isLoggedIn && (
              <NavLink
                onClick={() => setIsNavigationOpen(false)}
                to="/favorites"
              >
                Favorites
              </NavLink>
            )}
          </NavigationNav>

          {isLoggedIn ? (
            <Button type="button" className="auth" onClick={handleClickLogOut}>
              Log out
            </Button>
          ) : (
            <Authorization>
              <LoginContainer onClick={handleClick}>
                <Login />
                <Button type="button">Log in</Button>
              </LoginContainer>
              <Button type="button" className="auth" onClick={handleClick}>
                Registration
              </Button>
            </Authorization>
          )}
        </NavigationContainer>
      ) : (
        <NavigationMenu onClick={handleClickMenu} />
      )}
      {isModalOpen && childrenModal === 'login' && !isNavigationOpen && (
        <Modal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
      {isModalOpen && childrenModal === 'registration' && !isNavigationOpen && (
        <Modal closeModal={closeModal}>
          <RegistrationForm closeModal={closeModal} />
        </Modal>
      )}
    </Container>
  );
};
