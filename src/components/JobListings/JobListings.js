import React from 'react';
import './JobListings.scss';
import jobs from '../../jobScraping.json';

const JobListings = () => {
    const findColor = (city) => {
    switch (city) {
      case 'Berlin':
          return { borderTop: '2px solid red'}
      case 'Hamburg':
          return { borderTop: '2px solid green'}
      case 'Munich':
          return { borderTop: '2px solid yellow'}
      default:
        return { borderTop: '2px solid blue'}
    }
  }
  
  return (
    <div className='container'>
      <div className='row joblistings-wrapper'>
        {
          jobs.map((job, index) => {
            return (
              <div className="card-wrapper" style={findColor(job.location)} key={index}>
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
          })
        }
      </div>
    </div>
  )
}

export default JobListings;