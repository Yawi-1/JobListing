import { useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import JobList from "../components/JobList";
import JobDetail from "../components/JobDetail";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

export default function JobListingWebsite() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  //Function to handle the job selection and show its detail on the right sidee.
  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setIsMobileDetailOpen(true);
  };

  //This wiil be used in mobile devices only.
  const closeDetailPanel = () => {
    setIsMobileDetailOpen(false);
  };

  // Function to fetch the data from the API.
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/jobs?search=${searchTerm}&page=${page}`
      );
      const data = await response.json();
      console.log(data);
      setJobs(data.jobs);
      setTotalJobs(data.totalJobs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  //Useffect with debouncing ....
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, page]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto flex flex-1 p-4 gap-4">
        {loading ? (
          <Spinner />
        ) : (
          <JobList
            totalJobs={totalJobs}
            jobs={jobs}
            isMobileDetailOpen={isMobileDetailOpen}
            handleJobSelect={handleJobSelect}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedJob={selectedJob}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
          />
        )}

        <div
          className={`w-full lg:w-1/3 bg-white rounded-lg shadow ${
            isMobileDetailOpen ? "block" : "hidden lg:block"
          }`}
        >
          {selectedJob ? (
            <JobDetail
              selectedJob={selectedJob}
              closeDetailPanel={closeDetailPanel}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500 p-4 text-center">
              <div>
                <Briefcase size={48} className="mx-auto mb-4 text-gray-400" />
                <p>Select a job to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
