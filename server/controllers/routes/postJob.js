const { postJob } = require('../../db/queries/postJob');
const { newJobSchema } = require('../ValidationSchemas/newJobSchema');

module.exports = async (req, res, next) => {
  const user = req.body;
  user.clientId = req.user.id;
  try {
    await newJobSchema.validate(user);
    const jobInfo = await postJob(user);
    res.send({ data: jobInfo.rows[0], statusCode: 200 });
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).send({ message: err.message, statusCode: 400 });
    } else {
      next(err);
    }
  }
};
