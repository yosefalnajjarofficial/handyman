const express = require('express');
const logout = require('../controllers/routes/getLogout');

const router = express.Router();
router.get('/logout', logout);

module.exports = router;
