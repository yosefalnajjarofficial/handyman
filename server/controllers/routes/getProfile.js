const { getProfile } = require('../../db/queries/getProfile');

module.exports = async (req, res, next) => {
  try {
    const profileData = await getProfile(req.params.id);
    if (profileData.rows[0]) res.send({ data: profileData.rows[0], statusCode: 200 });
    // why only the first row?!
    else res.send({ message: 'user not found', statusCode: 200 });
  } catch (error) {
    next(error);
  }
};
