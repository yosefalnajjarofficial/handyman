const express = require('express');

const { getUserJobs } = require('./routes');

const router = express.Router();

router.get('/jobs', getUserJobs);

module.exports = router;
