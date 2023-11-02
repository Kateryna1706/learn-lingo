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
    bottom: 15px;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-self: start;
  /* width: 100%; */

  input {
    height: 48px;
    padding: 14px 18px;
    border: none;
    border-radius: 14px;
    box-sizing: border-box;
    background-color: #f7f7fb;
    &::placeholder {
      font-size: 18px;
      line-height: 20px;
      font-weight: 500;
      color: #121417;
    }
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
`;

export const DropdownBrandItem = styled.div``;

export const Price = styled.input`
  width: 125px;
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
`;
