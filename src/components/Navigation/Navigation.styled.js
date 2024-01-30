import styled from '@emotion/styled';
import { ReactComponent as Menu } from '../Icons/menu.svg';

export const Container = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: space-between;

    padding: 10px;
  }
`;

export const NavigationMenu = styled(Menu)`
  display: flex;
  align-self: flex-end;

  stroke: #262626;

  cursor: pointer;

  :hover {
    stroke: #f4c550;
  }
`;

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  box-sizing: border-box;

  max-width: 1440px;
  width: 100%;
  padding: 20px 8.88%;

  background-color: #ffffff;

  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    text-decoration: none;
    color: #121417;

    &.active {
      color: #f4c550;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: flex-end;
    gap: 50%;

    z-index: 10;

    width: 70%;
    height: 100vh;
    padding-bottom: 40px;
    padding-top: 40px;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;

      stroke: #262626;

      cursor: pointer;

      :hover {
        stroke: #f4c550;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 8px;

  img {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;

  color: #121417;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const NavigationNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 28px;
  gap: 28px;

  a:hover {
    color: #f4c550;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Authorization = styled.div`
  display: flex;
  gap: 16px;
  align-self: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;

  svg {
    stroke: #ffdc86;
    cursor: pointer;

    &:hover {
      stroke: #f4c550;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  color: #121417;
  background-color: transparent;

  cursor: pointer;

  :hover {
    color: #f4c550;
  }

  &.auth {
    padding: 14px 39px;
    border-radius: 12px;

    color: #ffffff;
    background-color: #121417;

    :hover {
      background-color: #f4c550;
    }
  }
`;
