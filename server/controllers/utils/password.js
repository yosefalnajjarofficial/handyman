const bcrypt = require('bcrypt');

exports.hashPassowrd = (password) => bcrypt.hash(password, 10);

exports.comparePassword = (plainPass, hashedPass) => bcrypt.compare(plainPass, hashedPass);
