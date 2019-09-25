const { getOneService } = require('../../db/queries/getOneService');

module.exports = async (req, res, next) => {
  try {
    const data = await getOneService(req.params.id);
    res.send({ data: data.rows, statusCode: 200 });
  } catch (err) {
    next(err);
  }
};
