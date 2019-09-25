const yup = require('yup');

exports.newJobSchema = yup.object({
  deadline: yup.date().min(new Date()),
  price: yup.number().positive().min(5).required(),
  description: yup.string().required(),
  street: yup.string().required(),
  buildingNumber: yup.string().required(),
  flatNumber: yup.string().required(),
});
