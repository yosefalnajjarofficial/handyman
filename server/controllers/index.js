const express = require('express');
const { signup } = require('./routes/signup');

const logout = require('../controllers/routes/getLogout');

const router = express.Router();
router.post('/signup', signup);

router.get('/logout', logout);

module.exports = router;
