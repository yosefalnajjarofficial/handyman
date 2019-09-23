const { getJobs } = require('../../db/queries/getJobs');

module.exports = async (req, res, next) => {
  try {
    const jobs = await getJobs(req.user.id);
    res.status(200).send({ data: jobs.rows });
  } catch (error) {
    next(error);
  }
};
