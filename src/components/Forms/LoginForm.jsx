import {
  Button,
  FormWrapper,
  FormContainer,
  Header,
  Icon,
  Label,
  Text,
} from './Form.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    actions.resetForm();
  };
  return (
    <FormContainer>
      <Header>Log In</Header>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <Label>
            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" />
          </Label>
          <Label>
            <Icon />
            <Field type="password" placeholder="Password" name="password" />
            <ErrorMessage name="password" component="div" />
          </Label>
          <Button type="submit">Log In</Button>
        </FormWrapper>
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
