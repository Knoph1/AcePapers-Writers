const express = require('express');
const {
  createJob,
  getJobs,
  assignJob,
  updateJobStatus,
} = require('../controllers/jobController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createJob);
router.get('/', protect, getJobs);
router.put('/assign/:id', protect, assignJob);
router.put('/status/:id', protect, updateJobStatus);

module.exports = router;

// // 1. POST /: This route allows authenticated users to create a new job. It uses the createJob function from the jobController.
// // 2. GET /: This route allows authenticated users to retrieve a list of jobs. It uses the getJobs function from the jobController. 
