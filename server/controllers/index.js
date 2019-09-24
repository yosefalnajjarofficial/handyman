const express = require('express');

const router = express.Router();

const { profile, logout } = require('./routes');

router.get('/profile/:id', profile);
router.get('/logout', logout);

module.exports = router;
