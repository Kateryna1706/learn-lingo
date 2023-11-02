import { NavLink } from 'react-router-dom';

import { NavigationContainer, NavigationDiv } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationDiv>
        <NavLink to="/catalog">Cars</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </NavigationDiv>

      <NavLink to="/">Home</NavLink>
    </NavigationContainer>
  );
};
