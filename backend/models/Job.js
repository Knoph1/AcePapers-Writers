const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);

// This code defines a Mongoose schema for a "Job" model in a MongoDB database. The schema includes fields for the client (referencing a User model), title, description, status (with possible values of 'pending', 'in_progress', or 'completed'), and writer (also referencing a User model, defaulting to null). The schema also includes timestamps for when the job was created and last updated. Finally, the schema is exported as a Mongoose model named "Job". This model can be used to interact with the "jobs" collection in the MongoDB database.
// The code is intended to be used in a Node.js application, typically in a backend server, to manage job-related data in the database. The Mongoose library is used to define the schema and interact with MongoDB.
