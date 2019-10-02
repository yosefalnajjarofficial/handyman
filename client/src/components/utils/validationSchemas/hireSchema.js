import * as yup from 'yup';

const hireSchema = yup.object({
  deadline: yup.date('Deadline Should be a valid date').min(new Date()),
  price: yup
    .number('Price should be a number')
    .positive()
    .min(5)
    .required(),
  description: yup.string('Description should be string').required(),
  street: yup.string('Street should be string').required(),
  buildingNumber: yup.string('Building Number should be string').required(),
  flatNumber: yup.string('Flat Number should be string').required(),
});

export default hireSchema;
