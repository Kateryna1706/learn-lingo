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
  letter-spacing: -0.02em;

  color: #121417;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;

  color: #121417;
`;

export const RadioTitle = styled.p`
  margin: 0 0 20px 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;

  color: #121417;
`;

export const TeacherInfo = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const TeacherName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .value {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;

    color: #8a8a89;
  }

  .name {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    color: #121417;
  }
`;

export const TeacherAvatar = styled.div`
  width: 44px;
  height: 44px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 40px 0;
`;

export const Label = styled.label`
  &:last-of-type {
    position: relative;
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

    &:focus {
      outline-color: #f4c550;
    }
  }
`;

export const RadioLabel = styled.label`
  position: relative;

  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  input {
    visibility: hidden;
  }

  input:checked ~ div {
    border: 2px solid #f4c550;
  }

  input:checked ~ div .selected {
    visibility: visible;
  }
`;

export const CustomRadioButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f4c550;
  visibility: hidden;
`;

export const RadioText = styled.span`
  padding-left: 32px;

  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;

export const Icon = styled(EyeOf)`
  position: absolute;
  top: 17px;
  right: 17px;

  stroke: #121417;
  cursor: pointer;

  &:hover {
    stroke: #f4c550;
  }
`;

export const Button = styled.button`
  padding: 16px;
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
