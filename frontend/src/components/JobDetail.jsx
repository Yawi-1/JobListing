import React from 'react'
import { X,Clock,MapPin,Briefcase,User,BarChart2 } from 'lucide-react'
const JobDetail = ({selectedJob,closeDetailPanel}) => {
  return (
    <div className="h-full flex flex-col">
    <div className="p-4 border-b flex justify-between items-center">
      <h2 className="font-semibold text-lg">Job Details</h2>
      <button 
        className="lg:hidden p-1 rounded-full hover:bg-gray-100"
        onClick={closeDetailPanel}
      >
        <X size={20} />
      </button>
    </div>
    <div className="p-4 overflow-y-auto flex-1">
      <img 
        src={selectedJob.companyImageUrl} 
        alt={selectedJob.company} 
        className="w-20 h-20 object-contain mb-4"
      />
      <h1 className="text-2xl font-bold text-blue-600 mb-2">{selectedJob.title}</h1>
      <h2 className="text-xl font-semibold mb-4">{selectedJob.company}</h2>
      
      <div className="flex flex-wrap gap-y-3 mb-6">
        <div className="flex items-center mr-4 text-gray-700">
          <MapPin size={18} className="mr-1" />
          <span>{selectedJob.location}</span>
        </div>
        <div className="flex items-center mr-4 text-gray-700">
          <Briefcase size={18} className="mr-1" />
          <span>{selectedJob.employment_type}</span>
        </div>
        <div className="flex items-center mr-4 text-gray-700">
          <Clock size={18} className="mr-1" />
          <span>
            Posted {new Date(selectedJob.postedDateTime).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        <div className="flex items-center mr-4 text-gray-700">
          <User size={18} className="mr-1" />
          <span>{selectedJob.experience}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <BarChart2 size={18} className="mr-1" />
          <span>{selectedJob.seniority_level}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Experience Required</h3>
        <p className="text-gray-700">{selectedJob.experience}</p>
      </div>
  
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Company Type</h3>
        <p className="text-gray-700 capitalize">{selectedJob.companytype}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Country</h3>
        <p className="text-gray-700 capitalize">{selectedJob.country}</p>
      </div>
  
      <a
        href={selectedJob.job_link}
        target="_blank"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Apply on LinkedIn
      </a>
    </div>
  </div>
  )
}

export default JobDetail