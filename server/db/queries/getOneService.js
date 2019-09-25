const connection = require('../config/connection');

exports.getOneService = (id) => connection.query('select t1.name,t2.description,t2.hour_rate,t3.username,t3.phone from services t1 inner join handyman t2 ON t2.job_title = t1.id inner join users t3 on t3.id = t2.handyman_id where t2.job_title=$1', [id]);
