import styled from '@emotion/styled';
import { ReactComponent as Close } from '../Icons/close.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 600px;
  padding: 64px;
  border-radius: 30px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const CrossClose = styled(Close)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
