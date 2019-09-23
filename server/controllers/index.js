const express = require('express');

const router = express.Router();
const { getUserJobs } = require('./routes');

router.get('/jobs', getUserJobs);

module.exports = router;
