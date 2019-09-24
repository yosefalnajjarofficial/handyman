const { getProfile } = require('../../db/queries/getProfile');

module.exports = async (req, res, next) => {
  try {
    const profileData = await getProfile(req.parms.id);
    res.send({ data: profileData.rows[0], statusCode: 200 });
  } catch (error) {
    next(error);
  }
};
