import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  min-height: 100vh;
  width: 100vw;
  background-color: #eeeeee;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  box-sizing: border-box;

  width: 100%;
  max-width: 1440px;
  padding: 96px 8.88%;

  @media (max-width: 768px) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
`;
