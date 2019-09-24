const { getServices } = require('../../db/queries/getServices');

module.exports = async (req, res, next) => {
  try {
    const services = await getServices();
    res.send({ data: services.rows });
  } catch (err) {
    next(err);
  }
};
