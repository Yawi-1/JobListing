const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  job_link: {
    type: String,
    required: true
  },
  seniority_level:{
    type: String,
    required: true
  },
  employment_type: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postedDateTime: {
    type: Date,
    required: true
  },
  companyImageUrl: {
    type: String
  },
  min_exp: {
    type: Number,
    required: true
  },
  max_exp: {
    type: Number,
    required: true
  },
  country:{
    type: String,
    required: true
  },
  companytype:{
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Job =  mongoose.model('Job', jobSchema);
module.exports = Job;
