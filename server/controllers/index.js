const express = require('express');
const { getLogout } = require('../controllers/routes/getLogout');

const router = express.Router();
router.get('/logout', getLogout);

module.exports = router;
