import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  width: 1184px;
  padding: 0;
  margin: 0;
  margin-top: 50px;
  font-size: 25px;

  p,
  h1,
  h2,
  h3 {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: calc((100% - 87px) / 4);

  img {
    display: block;
    width: 274px;
    height: 268px;
    border-radius: 14px;
  }
`;

export const ContainerMakeAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: #121417;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;

  p {
    padding: 0 5px;
    font-size: 12px;
    line-height: 18px;
    color: rgba(18, 20, 23, 0.5);
  }

  & :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin-top: 28px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #fff;

  background-color: #3470ff;
  cursor: pointer;

  :hover {
    background-color: #0b44cd;
  }
`;

export const More = styled.a`
  margin-top: 100px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
  color: #3470ff;
  cursor: pointer;
`;
