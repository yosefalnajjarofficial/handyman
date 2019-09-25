const { getServices } = require('../../db/queries/getServices');

module.exports = async (req, res, next) => {
  try {
    const services = await getServices();
    res.send({ data: services.rows, statusCode: 200 });
  } catch (err) {
    next(err);
  }
};
