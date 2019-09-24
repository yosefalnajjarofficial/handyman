const yup = require('yup');

exports.loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
