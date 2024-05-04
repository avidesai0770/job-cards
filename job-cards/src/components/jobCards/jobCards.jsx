import React from "react";
import "./jobCard.css";
import Button from '@mui/material/Button';

const JobCards = ({ job }) => {
  return (
    <div className="main-container">
      <div className="job-info">
        <div className="company-info">
          <img className="logo" src={job?.logoUrl} alt="logo" />
          <div className="company-info2">
            <h6 className="item">{job?.companyName}</h6>
            <h5 className="item">{job?.jobRole}</h5>
            <h4 className="item">{job?.location}</h4>
          </div>
        </div>
       <p>Estimated Salary: {job?.minJdSalary} - {job?.maxJdSalary} {job?.salaryCurrencyCode}</p>
      </div>
      <div>
        <p>About Company:</p>
        <div className="job-description">
            {job?.jobDetailsFromCompany}
            <button class="show-more">Show More</button>
        </div>
      </div>
      {job?.minExp ? 
      <div>
        <h3>Minimum Experience</h3>
        <h2>{job?.minExp}</h2>
      </div> : null
      }
      <div className="i">
      <Button  variant="contained">Easy Apply</Button>
      </div>
    </div>
  );
};

export default JobCards;
