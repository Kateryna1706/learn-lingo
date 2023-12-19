import styled from '@emotion/styled';
import { ReactComponent as EyeOf } from '../Icons/eye-off.svg';
import { Form } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: transparent;
`;

export const Header = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -2px;

  color: #121417;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  color: #121417;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  &:not(:last-of-type) {
    margin-bottom: 18px;
  }

  &:last-of-type {
    position: relative;
    margin-bottom: 40px;
  }

  input {
    box-sizing: border-box;
    height: 54px;
    width: 100%;
    padding: 16px 18px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;

      color: #121417;
    }
  }
`;

export const Icon = styled(EyeOf)`
  position: absolute;
  top: 17px;
  right: 17px;
`;

export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 12px;

  font-size: 18px;
  font-weight: 700;
  line-height: 28px;

  background-color: #f4c550;
`;
