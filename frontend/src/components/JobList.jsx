import React from "react";
import {
  Search,
  Briefcase,
  MapPin,
  ArrowRight,
  ArrowLeft,
  BarChart2
} from "lucide-react";

const JobList = ({
  isMobileDetailOpen,
  jobs,
  handleJobSelect,
  searchTerm,
  setSearchTerm,
  selectedJob,
  totalJobs,
  page,
  setPage,
  totalPages,
}) => {
  return (
    <div
      className={`max-h-screen overflow-auto w-full lg:w-2/3 flex flex-col gap-4 ${
        isMobileDetailOpen ? "hidden lg:flex" : "flex"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search jobs based on locations..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow flex-1 overflow-hidden">
        <h2 className="p-4  font-semibold text-lg">
          Available Jobs ({totalJobs})
        </h2>
        <div className="flex items-center justify-between border-b">
          <h3 className="font-semibold p-4">Total pages : {totalPages}</h3>
          <div className="flex justify-end gap-x-4  items-center p-4 ">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              <ArrowLeft />
            </button>
            <h3>
              Page :
              <input
                className="w-12 h-12 text-center border-2 rounded-md px-1"
                type="text"
                min="1"
                max={totalPages}
                value={page}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (isNaN(value)) {
                    setPage(1);
                    return;
                  }
                  if (value < 1) {
                    setPage(1);
                  } else if (value > totalPages) {
                    setPage(totalPages);
                  } else {
                    setPage(value);
                  }
                }}
              />
            </h3>
            <button
              className="cursor-pointer"
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="overflow-y-auto max-h-full">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job._id}
                className={`p-4 border-b cursor-pointer hover:bg-blue-50 transition-colors ${
                  selectedJob?._id === job._id ? "bg-blue-50" : ""
                }`}
                onClick={() => handleJobSelect(job)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-x-4">
                  <img className="w-16 rounded-full" src={job.companyImageUrl} alt={job.company} />
                  <h3 className="font-semibold text-lg text-blue-600">
                    {job.title}
                  </h3>
                  </div>
                  <span className="text-sm text-gray-500">
                    Posted on : {new Date(job.postedDateTime).toDateString()}
                  </span>
                </div>
                <div className="mb-2 font-medium">{job.company}</div>
                <div className="flex flex-wrap gap-y-2">
                  <div className="flex items-center text-sm text-gray-600 mr-4">
                    <MapPin size={16} className="mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-4">
                    <Briefcase size={16} className="mr-1" />
                    {job.employment_type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart2 size={16} className="mr-1" />
                    {job.experience}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No jobs match your search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
