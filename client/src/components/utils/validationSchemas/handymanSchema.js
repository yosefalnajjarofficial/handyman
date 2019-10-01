import * as yup from 'yup';

const validationschema = yup.object().shape({
  jobTitle: yup.number().required(),
  hourRate: yup
    .number('hour rate should be a number')
    .positive()
    .required('required Filed'),
  description: yup
    .string('description should be a string')
    .min(10, 'description should be at least a 10 characters')
    .required('required Filed'),
});

export default validationschema;
