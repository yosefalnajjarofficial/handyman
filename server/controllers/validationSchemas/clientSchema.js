const yup = require('yup');

exports.clientSchema = yup.object({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().min(8).required(),
  phone: yup.number().positive().integer().min(10)
.required(),
  country: yup.string().min(3).required(),
  city: yup.string().min(3).required(),
  isHandyman: yup.boolean().required(),
});
