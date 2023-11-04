import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 1200;
`;

export const ModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: #ffffff;
  box-sizing: border-box;

  img {
    display: block;
    width: 100%;
    height: 248px;
  }

  p {
    margin: 0;
  }

  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;

export const ContainerMakeAndYear = styled.div`
  margin-top: 14px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #121417;
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

export const Description = styled.div`
  margin-top: 14px;
`;

export const Accessories = styled.div`
  margin-top: 24px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  & :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  li {
    padding: 0 5px;
    font-size: 12px;
    line-height: 18px;
    color: rgba(18, 20, 23, 0.5);
  }
`;

export const Conditions = styled.div`
  margin-top: 24px;
`;

export const ListConditions = styled.div`
  display: flex;
  justify-content: start;
  /* flex-direction: row-reverse; */
  flex-wrap: wrap-reverse;
  gap: 8px;
  width: 100%;
  margin-top: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 12px;
  line-height: 18px;
  color: #363535;

  li {
    padding: 7px 14px;
    border-radius: 35px;
    background-color: #f9f9f9;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 44px;
  margin-top: 24px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;

  background-color: #3470ff;
  cursor: pointer;

  :hover {
    background-color: #0b44cd;
  }
`;
