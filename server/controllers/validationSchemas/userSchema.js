const yup = require('yup');

module.exports = yup.object({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  phone: yup.number().positive().integer().min(10)
    .required(),
  country: yup.string().min(3).required(),
  city: yup.string().min(3).required(),
  isHandyman: yup.boolean().required(),
});
