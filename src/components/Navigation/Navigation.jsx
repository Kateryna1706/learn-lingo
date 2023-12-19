import { NavLink } from 'react-router-dom';

import {
  Authorization,
  Button,
  Logo,
  NavigationContainer,
  NavigationDiv,
} from './Navigation.styled';
import { useState } from 'react';
import RegistrationForm from 'components/Forms/RegistrationForm';
import Modal from 'components/Modal/Modal';
import LoginForm from 'components/Forms/LoginForm';

export const Navigation = ({ isModalOpen, openModal, closeModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [childrenModal, setChildrenModal] = useState('');

  const handleClick = form => {
    openModal();

    if (form === 'login') {
      setChildrenModal('login');
    } else {
      setChildrenModal('registration');
    }
  };

  return (
    <NavigationContainer>
      <Logo>
        <img href="" alt="Logo"></img>
        <NavLink to="/">LearnLingo</NavLink>
      </Logo>
      <NavigationDiv>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Teachers</NavLink>
        {isLoggedIn && <NavLink to="/favorites">Favorites</NavLink>}
      </NavigationDiv>

      {isLoggedIn ? (
        <Button type="button">Log out</Button>
      ) : (
        <Authorization>
          <Button onClick={() => handleClick('login')}>Log in</Button>
          <Button onClick={() => handleClick('registration')}>
            Registration
          </Button>
        </Authorization>
      )}
      {isModalOpen && childrenModal === 'login' && (
        <Modal>
          <LoginForm />
        </Modal>
      )}
      {isModalOpen && childrenModal === 'registration' && (
        <Modal>
          <RegistrationForm />
        </Modal>
      )}
    </NavigationContainer>
  );
};
