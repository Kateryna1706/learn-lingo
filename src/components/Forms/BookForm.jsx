import {
  Button,
  Circle,
  CustomRadioButton,
  FormContainer,
  FormWrapper,
  Header,
  Label,
  RadioLabel,
  RadioText,
  RadioTitle,
  TeacherAvatar,
  TeacherInfo,
  TeacherName,
  Text,
  Wrapper,
} from './Form.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { Notify } from 'notiflix';
import { useState } from 'react';
import * as Yup from 'yup';

const initialValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
};

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  reason: Yup.string().required('Required'),
});

const BookForm = ({ data, closeModal }) => {
  const { teacher, teacherAvatar } = data;
  const [lessonReservation, setLessonReservation] = useState([]);
  console.log(lessonReservation);

  const handleSubmit = (values, actions) => {
    const { fullName, email, phoneNumber, reason } = values;
    const bookLesson = {
      teacher,
      fullName,
      email,
      phoneNumber,
      level: '',
      reason,
    };

    setLessonReservation(prevState => [bookLesson, ...prevState]);
    Notify.success(`You have booked a lesson with a teacher ${teacher}`);

    actions.resetForm();
    closeModal();
  };
  return (
    <FormContainer>
      <Header>Book trial lesson</Header>
      <Text>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Text>
      <TeacherInfo>
        <TeacherAvatar>
          <img alt=" " src={teacherAvatar} width={44} height={44}></img>
        </TeacherAvatar>
        <TeacherName>
          <span className="value">Your teacher</span>
          <span className="name">{teacher}</span>
        </TeacherName>
      </TeacherInfo>

      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <RadioTitle>
            What is your main reason for learning English?
          </RadioTitle>
          <RadioLabel>
            <Field type="radio" name="reason" value="Career and business" />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Career and business</RadioText>
          </RadioLabel>
          <RadioLabel>
            <Field type="radio" name="reason" value="Lesson for kids" />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Lesson for kids</RadioText>
          </RadioLabel>
          <RadioLabel>
            <Field type="radio" name="reason" value="Living abroad" />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Living abroad</RadioText>
          </RadioLabel>
          <RadioLabel>
            <Field type="radio" name="reason" value="Exams and coursework" />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Exams and coursework</RadioText>
          </RadioLabel>
          <RadioLabel>
            <Field
              type="radio"
              name="reason"
              value="Culture, travel or hobby"
            />
            <CustomRadioButton>
              <Circle className="selected"></Circle>
            </CustomRadioButton>
            <RadioText>Culture, travel or hobby</RadioText>
          </RadioLabel>
          <Wrapper>
            <Label>
              <Field placeholder="Full Name" name="fullName" />
              <ErrorMessage name="fullName" component="div" />
            </Label>
            <Label>
              <Field type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <Field placeholder="Phone number" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component="div" />
            </Label>
          </Wrapper>
          <Button type="submit">Book</Button>
        </FormWrapper>
      </Formik>
    </FormContainer>
  );
};

export default BookForm;
