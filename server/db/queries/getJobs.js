const dbconnection = require('../config/connection');

exports.getJobs = (id) => dbconnection.query({
  text: 'SELECT * FROM jobs WHERE client_id = $1',
  values: [id],
});
