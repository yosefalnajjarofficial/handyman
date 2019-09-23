const express = require('express');
const { postJob } = require('./routes/postJob');

const router = express.Router();
router.post('/hire', postJob);

module.exports = router;
