import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  padding: 40px 8.5%;
  margin: 0;
  border: 1.5px dashed #f4c550;
  border-radius: 30px;
  list-style: none;

  li {
    display: flex;
    gap: 16px;
  }
`;

export const WordWrapper = styled.span`
  display: inline-flex;
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.02em;

  & ~ span {
    display: inline-flex;
    min-width: 74px;
    max-width: 96px;

    font-size: 14px;
  }
`;
