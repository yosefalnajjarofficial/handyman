const yup = require('yup');

exports.newJobSchema = yup.object({
  deadline: yup.date().min(new Date()),
  price: yup
    .number()
    .positive()
    .required()
    .min(5),
  description: yup
    .string()
    .min(5)
    .required(),
  street: yup.string().required(),
  buildingNumber: yup.string().required(),
  flatNumber: yup.string().required(),
});
