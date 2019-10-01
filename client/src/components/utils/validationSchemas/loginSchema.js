import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string('Email should be a string')
    .email('Email not vaild')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 character')
    .required('Password is required'),
});

export default loginSchema;
