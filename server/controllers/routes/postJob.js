const { postJob } = require('../../db/queries/postJob');
const { newJobSchema } = require('../ValidationSchemas/newJobSchema');

exports.postJob = async (req, res, next) => {
  const { clientId } = req.cookies;
  req.body.clientId = clientId;
  try {
    const valid = await newJobSchema.isValid(req.body);
    if (valid) {
      await postJob(req.body);
      res.set('Content-Type', 'application/json');
      res.send({ message: 'success', statusCode: 200 });
    } else {
      res.send({ message: 'failed', statusCode: 400 });
    }
  } catch (err) {
    next(err);
  }
};
