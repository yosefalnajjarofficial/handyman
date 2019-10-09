const connection = require('../config/connection');

exports.getJobs = (id) => connection.query('SELECT t1.id,t1.status,t1.description,t1.deadline,t1.price,t1.message,t1.street,t1.building_number,t1.flat_number,t1.handyman_id,t3.username FROM jobs t1 INNER JOIN handyman t2 ON t1.handyman_id=t2.handyman_id INNER JOIN users t3 ON t2.handyman_id=t3.id WHERE client_id = $1', [id]);
