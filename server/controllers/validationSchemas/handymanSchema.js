const yup = require('yup');

exports.handymanSchema = yup.object({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  phone: yup.number().positive().min(10).required(),
  isHndyman: yup.boolean().required(),
  country: yup.string().min(3).required(),
  city: yup.string().min(3).required(),
  jobTitle: yup.number().required(),
  hourRate: yup.number().positive().required(),
  description: yup.string().min(10).required(),
});
