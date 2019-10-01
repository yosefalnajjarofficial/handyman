import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup
    .string('username should be a string')
    .min(3, 'username should be at least 3 characters')
    .required('required filed'),
  email: yup
    .string('should be an email')
    .min(3, 'should be a 3 charcters at least')
    .required('required filed'),
  password: yup
    .string('password should be a string')
    .min(8, 'password should be at least 8 characters')
    .required('required filed'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  phone: yup
    .number('phone must be a number')
    .positive('phone must be positive')
    .integer('phone must be integer')
    .min(10, 'phone should be at least 10 digits')
    .required('required filed'),
  country: yup
    .string('country should be a string')
    .min(3, 'country should be at least 3 characters')
    .required('required filed'),
  city: yup
    .string('city should be a string')
    .min(3)
    .required('required filed'),
  isHandyman: yup.boolean().required('required filed'),
});

export default schema;
