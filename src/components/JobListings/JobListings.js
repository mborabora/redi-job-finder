import React, { useState } from 'react';
import './JobListings.scss';
import jobs from '../../jobScraping.json';

const JobListings = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  const findColor = (city) => {
    switch (city) {
      case 'Berlin':
          return { borderTop: '2px solid #B21F66' }
      case 'Hamburg':
          return { borderTop: '2px solid #2C787E' }
      case 'Munich':
          return { borderTop: '2px solid #FFBD69' }
      default:
        return { borderTop: '2px solid #111D5E' }
    }
  }

  let jobFavs;
  if (savedJobs.length > 0) {
    jobFavs = (
      <div className="saved-jobs">
        <div className="saved-jobs-count">Favourites</div>
        <div className="saved-jobs-icon">
          <div className="job-icon">{savedJobs.length}</div>
        </div>
        <div className="saved-jobs-details">
          {savedJobs.map(job => {
            return <div className="saved-job-detail">{job}</div>;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cards-headline" id="jobs">
        23 search results found for{" "}
        <span style={{ fontWeight: 700, textDecoration: "underline" }}>
          developer
        </span>{" "}
        jobs in{" "}
        <span style={{ fontWeight: 700, textDecoration: "underline" }}>
          Germany
        </span>
      </div>
      {jobFavs}
      <div className="row joblistings-wrapper">
        {jobs.map((job, index) => {
          return (
            <div
              className="card-wrapper"
              style={findColor(job.location)}
              key={index}
            >
              <div
                className="card-save"
                onClick={() => setSavedJobs([...savedJobs, job.company])}
              >
                SAVE
              </div>
              <div className="card-location">{job.location}</div>
              <div className="card-position">{job.company}</div>
              <div className="card-description">
                <p>{job.title}</p>
                <p>{job.description}</p>
              </div>
              <div className="card-button-wrapper">
                <div className="card-information">
                  Please click on the link below for further information
                </div>
                <button className="card-button">Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobListings;