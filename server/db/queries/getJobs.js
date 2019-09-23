const connection = require('../config/connection');

exports.getJobs = (id) => connection.query('SELECT * FROM jobs WHERE client_id = $1', [id]);
