const express = require('express');

const router = express.Router();

const { unlockCookie } = require('./middleware/unlockCookie');
const {
  signup, profile, logout, userJobs, addJob, services, oneService,
} = require('./routes');

router.post('/signup', signup);


router.get('/services', services);
router.get('/service/:id', oneService);
router.get('/profile/:id', profile);
router.use(unlockCookie);
router.post('/hire', addJob);
router.get('/jobs', userJobs);
router.get('/logout', logout);

module.exports = router;
