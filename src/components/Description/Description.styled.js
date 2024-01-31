import styled from '@emotion/styled';

export const ContainerSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  color: #121417;

  img {
    width: 39.44%;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap-reverse;
    gap: 0;

    img {
      width: 100%;
      min-width: 320px;
    }
  }
`;

export const ContainerDescription = styled.div`
  width: 50%;
  padding: 98px 4.4%;
  border-radius: 30px;
  box-sizing: border-box;

  background-color: #f8f8f8;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 320px;

    padding: 48px 4.4%;
  }
`;

export const FirstParagraph = styled.p`
  margin: 0;
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 22px;

    font-size: 35px;
  }
`;

export const WordWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  font-style: italic;

  background-color: #fbe9ba;
`;

export const SecondParagraph = styled.p`
  margin: 0;
  margin-bottom: 64px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  padding: 16px 12.2%;
  border: none;
  border-radius: 12px;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  background-color: #ffdc86;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f4c550;
  }
`;
