const express = require('express');

const router = express.Router();

const { getUserJobs } = require('./routes');
const { unlockCookie } = require('./middleware/unlockCookie');

router.use(unlockCookie);
router.get('/jobs', getUserJobs);

module.exports = router;
