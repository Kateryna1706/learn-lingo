import styled from '@emotion/styled';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  font-size: 25px;

  background-color: #3470ff;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  a {
    text-decoration: none;
    color: #fff;

    &.active {
      color: orange;
    }
  }
`;

export const NavigationDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
