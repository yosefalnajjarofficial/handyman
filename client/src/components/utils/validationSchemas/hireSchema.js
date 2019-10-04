import * as yup from 'yup';

const hireSchema = yup.object({
  deadline: yup
    .date('Deadline Should be a valid date')
    .min(new Date())
    .required('This is required'),
  price: yup
    .number('Price should be a number')
    .positive('Price should be a number')
    .min(5, 'Price should be more than 5')
    .required('This is required'),
  description: yup
    .string('Description should be string')
    .required('This is required'),
  street: yup.string('Street should be string').required('This is required'),
  buildingNumber: yup
    .string('Building Number should be string')
    .required('This is required'),
  flatNumber: yup
    .string('Flat Number should be string')
    .required('This is required'),
});

export default hireSchema;
