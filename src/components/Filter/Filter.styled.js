import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const ContainerPosition = styled.div`
  position: relative;

  .arrow {
    position: absolute;
    left: 190px;
    bottom: 20px;
    cursor: pointer;
  }

  .arrow.price {
    left: 35px;
    bottom: 20px;
  }

  .brand {
    max-height: 272px;
    width: 224px;
  }

  .price {
    max-height: 188px;
    width: 125px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-self: start;

  input {
    height: 48px;
    padding: 14px 18px;
    border: none;
    border-radius: 14px;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    color: #121417;
    background-color: #f7f7fb;
  }
`;

export const Text = styled.span`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: rgba(138, 138, 137, 1);
`;

export const Brand = styled.input`
  width: 224px;
`;

export const DropdownBrand = styled.div`
  position: absolute;
  top: 104%;
  display: flex;
  z-index: 200;
  flex-direction: column;
  gap: 8px;
  max-height: 272px;
  width: 224px;
  padding: 14px 18px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: #fff;
`;

export const DropdownBrandItem = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: rgba(18, 20, 23, 0.2);
  cursor: pointer;
`;

export const Price = styled.input`
  width: 125px;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 104%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 18px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-sizing: border-box;
  overflow-y: scroll;
  background-color: #fff;
`;

export const DropdownItem = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: rgba(18, 20, 23, 0.2);
  cursor: pointer;
`;

export const СarMileage = styled.div`
  display: flex;
`;

export const СarMileageItem = styled.input`
  width: 160px;
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-self: end;
  height: 48px;
  padding: 14px 44px;
  border: none;
  border-radius: 12px;
  box-sizing: border-box;
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
