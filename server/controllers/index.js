const express = require('express');

const { postJob } = require('./routes/postJob');
const logout = require('../controllers/routes/getLogout');

const router = express.Router();

router.post('/hire', postJob);
router.get('/logout', logout);

module.exports = router;
