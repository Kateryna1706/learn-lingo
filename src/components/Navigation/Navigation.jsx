import { NavLink } from 'react-router-dom';

import {
  Authorization,
  Button,
  LoginContainer,
  Logo,
  LogoText,
  NavigationContainer,
  NavigationNav,
} from './Navigation.styled';
import { useContext, useState } from 'react';
import RegistrationForm from 'components/Forms/RegistrationForm';
import Modal from 'components/Modal/Modal';
import LoginForm from 'components/Forms/LoginForm';
import LogoImg from '../../images/ukraine.jpg';
import { ReactComponent as Login } from '../Icons/log-in-01.svg';
import { Auth } from 'context';

import { signOut } from 'firebase/auth';
import { auth } from 'firebase-config';

export const Navigation = ({ isModalOpen, openModal, closeModal, logOut }) => {
  const authContex = useContext(Auth);
  const isLoggedIn = authContex.isLoggedIn;
  const [childrenModal, setChildrenModal] = useState('');

  const handleClick = form => {
    openModal();

    if (form === 'login') {
      setChildrenModal('login');
    } else {
      setChildrenModal('registration');
    }
  };

  const handleClickLogOut = () => {
    signOut(auth)
      .then(() => {
        logOut();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <NavigationContainer>
      <Logo>
        <img src={`${LogoImg}`} alt="Logo" width={28} height={28}></img>
        <LogoText>LearnLingo</LogoText>
      </Logo>
      <NavigationNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Teachers</NavLink>
        {isLoggedIn && <NavLink to="/favorites">Favorites</NavLink>}
      </NavigationNav>

      {isLoggedIn ? (
        <Button type="button" className="auth" onClick={handleClickLogOut}>
          Log out
        </Button>
      ) : (
        <Authorization>
          <LoginContainer onClick={() => handleClick('login')}>
            <Login />
            <Button type="button">Log in</Button>
          </LoginContainer>
          <Button
            type="button"
            className="auth"
            onClick={() => handleClick('registration')}
          >
            Registration
          </Button>
        </Authorization>
      )}
      {isModalOpen && childrenModal === 'login' && (
        <Modal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
      {isModalOpen && childrenModal === 'registration' && (
        <Modal closeModal={closeModal}>
          <RegistrationForm closeModal={closeModal} />
        </Modal>
      )}
    </NavigationContainer>
  );
};
