const express = require('express');

const router = express.Router();

const { getProfile, logout } = require('./routes');

router.get('/profile/:id', getProfile);
router.get('/logout', logout);

module.exports = router;
