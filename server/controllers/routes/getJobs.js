const { getJobs } = require('../../db/queries/getJobs');

module.exports = async (req, res, next) => {
  try {
    const jobs = await getJobs(req.user.id);
    res.send({ data: jobs.rows, statusCode: 200 });
  } catch (error) {
    next(error);
  }
};
