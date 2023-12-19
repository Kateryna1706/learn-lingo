import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Icon,
  Label,
  Text,
} from './Form.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const RegistrationForm = () => {
  
  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    actions.resetForm();
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
          <Label>
            <Field placeholder="Name" name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" />
          </Label>
          <Label>
            <Icon />
            <Field type="password" placeholder="Password" name="password" />
            <ErrorMessage name="password" component="div" />
          </Label>
          <Button type="submit">Sign Up</Button>
        </FormWrapper>
      </Formik>
    </FormContainer>
  );
};

export default RegistrationForm;
