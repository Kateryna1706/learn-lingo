import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Icon,
  Label,
  Text,
  Wrapper,
} from './Form.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Notify } from 'notiflix';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const RegistrationForm = ({ closeModal }) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Notify.success('Registration completed successfully');
      })
      .catch(error => {
        Notify.failure(error.code);
      });

    onAuthStateChanged(auth, user => {
      if (user) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
    });

    actions.resetForm();
    closeModal();
  };

  const handleClick = () => {
    setVisiblePassword(prevState => !prevState);
  };

  return (
    <FormContainer>
      <Header>Registration</Header>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <Wrapper>
            <Label>
              <Field placeholder="Name" name="name" />
              <ErrorMessage name="name" component="div" />
            </Label>
            <Label>
              <Field type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              <Icon onClick={handleClick} />
              <Field
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </Label>
          </Wrapper>
          <Button type="submit">Sign Up</Button>
        </FormWrapper>
      </Formik>
    </FormContainer>
  );
};

export default RegistrationForm;
