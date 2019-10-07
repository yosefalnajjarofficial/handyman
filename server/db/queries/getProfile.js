const connection = require('../config/connection');

exports.getProfile = (id) => connection.query('SELECT t1.username,t1.phone,t1.country,t1.city,t2.job_title,t2.hour_rate,t2.description,t3.name AS service FROM users t1 INNER JOIN handyman t2 ON t1.id = t2.handyman_id INNER JOIN services t3 on t2.job_title = t3.id where t2.handyman_id=$1', [id]);
// consistency with sql body
