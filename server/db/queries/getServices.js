const connection = require('./../config/connection');

exports.getServices = () => connection.query('select * from services');
