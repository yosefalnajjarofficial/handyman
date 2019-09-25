const yup = require('yup');

module.exports = yup.object({
  country: yup.string().min(3).required(),
  city: yup.string().min(3).required(),
  jobTitle: yup.number().required(),
  hourRate: yup.number().positive().required(),
  description: yup.string().min(10).required(),
});
