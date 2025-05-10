const Job = require('../models/Job');

exports.createJob = async (req, res) => {
  const { title, description } = req.body;
  try {
    const job = await Job.create({ client: req.user.id, title, description });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate('client', 'name')
      .populate('writer', 'name');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.assignJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ msg: 'Job not found' });
    job.writer = req.body.writerId;
    job.status = 'in_progress';
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateJobStatus = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ msg: 'Job not found' });
    job.status = req.body.status;
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// This code defines the job controller for a Node.js application using Express. It includes functions for creating a job, retrieving jobs, assigning a job to a writer, and updating the status of a job. The code uses Mongoose to interact with a MongoDB database. The createJob function creates a new job associated with the authenticated user. The getJobs function retrieves all jobs, populating the client and writer fields with their names. The assignJob function assigns a job to a writer and updates its status to 'in_progress'. The updateJobStatus function updates the status of a job based on the provided ID.
// The code is intended to be used in a backend server, typically in conjunction with a MongoDB database to store job information. The functions handle errors and respond with appropriate status codes and messages.
