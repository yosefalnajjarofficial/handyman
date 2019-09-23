const yup = require('yup');

exports.handymanSchema = yup.object({
  username: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().min(8).required(),
  phone: yup.number().positive().min(10).required(),
  country: yup.string().min(3).required(),
  city: yup.string().min(3).required(),
  handyman_id: yup.number().required(),
  jobTitle: yup.number().required(),
  hourRate: yup.number().required(),
  description: yup.string().min(10).required(),
});
