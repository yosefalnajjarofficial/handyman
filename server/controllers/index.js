const express = require('express');
const { signup } = require('./routes/signup');

const router = express.Router();
router.post('/signup', signup);

module.exports = router;
