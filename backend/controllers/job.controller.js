const Job = require("../models/job.model");

const getAllJobs = async (req, res) => {
  try {
    const { search, page = 1, limit = 100 } = req.query;
    const query = {
      location: { $regex: search || "", $options: "i" },
    };
    const skip = limit * (page - 1);
    const jobs = await Job.find(query).limit(limit).skip(skip);
    const totalJobs = await Job.countDocuments(query);
    res.json({
      jobs,
      totalJobs,
      page: Number(page),
      totalPages: Math.ceil(totalJobs / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllJobs;
