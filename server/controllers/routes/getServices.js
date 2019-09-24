const { getServices } = require('../../db/queries/getServices');

module.exports = async (req, res) => {
  try {
    const services = await getServices();
    res.send({ data: services.rows });
  } catch (err) {
    console.log(err);
  }
};
