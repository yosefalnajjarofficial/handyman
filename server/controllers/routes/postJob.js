const { postJob } = require('../../db/queries/postJob');
const { newJobSchema } = require('../ValidationSchemas/newJobSchema');

exports.postJob = async (req, res, next) => {
  const { clientId } = req.cookies;
  req.body.clientId = clientId;
  try {
    await newJobSchema.validate(req.body);
    await postJob(req.body);
    res.set('Content-Type', 'application/json');
    res.send({ message: 'success', statusCode: 200 });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.send({ message: err.message, statusCode: 400 });
    } else {
      next(err);
    }
  }
};
