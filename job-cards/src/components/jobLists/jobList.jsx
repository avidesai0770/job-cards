import React from "react";
import JobCards from "../jobCards/jobCards";
import "./jobList.css"

const JobList = ({ jobs }) => {
    return (
      <div className="job-list">
        {jobs.map(job => <JobCards key={job.id} job={job} />)}
      </div>
    );
  };

  export default JobList