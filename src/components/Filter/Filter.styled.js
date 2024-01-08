import styled from '@emotion/styled';

export const ContainerFilter = styled.div`
  display: flex;
  gap: 20px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: transparent;

  input {
    padding: 14px 18px;
    border: none;
    border-radius: 14px;
    box-sizing: border-box;
    background-color: #ffffff;
    outline: none;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 20px;

      color: #121417;
    }

    &:focus {
      border: 2px solid #f4c550;
    }
  }

  .languages {
    width: 221px;
  }

  .levels {
    width: 198px;
  }

  .prices {
    width: 124px;
  }

  .arrow {
    position: absolute;
    top: 45px;
    right: 18px;

    cursor: pointer;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: 55px;
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
  list-style: none;
`;

export const DropdownItem = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: rgba(18, 20, 23, 0.2);

  cursor: pointer;

  &:hover {
    color: #f4c550;
  }
`;
