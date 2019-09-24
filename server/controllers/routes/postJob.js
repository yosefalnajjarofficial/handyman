const { postJob } = require('../../db/queries/postJob');
const { newJobSchema } = require('../ValidationSchemas/newJobSchema');

exports.postJob = async (req, res, next) => {
  req.body.clientId = req.user.id;
  try {
    await newJobSchema.validate(req.body);
    const data = await postJob(req.body);
    res.send({ data: data.rows[0], statusCode: 200 });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.send({ message: err.message, statusCode: 400 });
    } else {
      next(err);
    }
  }
};
