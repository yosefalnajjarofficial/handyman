// const yup = require('yup');
const { postJob } = require('../../db/queries/postJob');
const { newJobSchema } = require('../ValidationSchemas/newJobSchema');

exports.postJob = (req, res, next) => {
  const { clientId } = req.cookies;
  req.body.clientId = clientId;
  newJobSchema.isValid(req.body).then((valid) => {
    res.send(valid);
  });
  postJob(req.body)
    .then(() => res.send({ message: 'success', statusCode: 200 }))
    .catch((err) => next(err));
};
