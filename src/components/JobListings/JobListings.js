import React from 'react';
import './JobListings.scss';

const JobListings = () => {
  const jobs = [
    {
      location: 'Berlin',
      position: 'Frontend Developer',
      description: 'Looking for a frontend developer specialized on React.js.'
    },
    {
      location: 'Hamburg',
      position: 'Android Developer',
      description: 'Looking for a frontend developer specialized on Android. Looking for a frontend developer specialized on Android.Looking for a frontend developer specialized on Android. Looking for a frontend developer specialized on Android. Looking for a frontend developer specialized on Android.Looking for a frontend developer specialized on Android.Looking for a frontend developer specialized on Android. Looking for a frontend developer specialized on Android.Looking for a frontend developer specialized on Android.'
    },
    {
      location: 'Munich',
      position: 'Software Developer',
      description: 'Looking for a frontend developer specialized on ehöhö'
    },
    {
      location: 'Berlin',
      position: 'Frontend Developer',
      description: 'Looking for a frontend developer specialized on React.js.'
    },
    {
      location: 'Hamburg',
      position: 'Android Developer',
      description: 'Looking for a frontend developer specialized on Android. Looking for a frontend developer specialized on Android.Looking for a frontend developer specialized on Android.'
    },
    {
      location: 'Munich',
      position: 'Software Developer',
      description: 'Looking for a frontend developer specialized on ehöhö'
    },
    {
      location: 'Berlin',
      position: 'Frontend Developer',
      description: 'Looking for a frontend developer specialized on React.js.'
    },
    {
      location: 'Hamburg',
      position: 'Android Developer',
      description: 'Looking for a frontend developer specialized on Android. Looking for a frontend developer specialized on Android.Looking for a frontend developer specialized on Android.'
    },
    {
      location: 'Munich',
      position: 'Software Developer',
      description: 'Looking for a frontend developer specialized on ehöhö'
    },
    {
      location: 'Munich',
      position: 'Software Developer',
      description: 'Looking for a frontend developer specialized on ehöhö'
    },
  ];
  
  return (
    <div className='container'>
      <div className='row joblistings-wrapper'>
        {
          jobs.map((job) => {
            return (
              <div className='card-wrapper'>
                <div className='card-location'>{job.location}</div>
                <div className='card-position'>{job.position}</div>
                <div className='card-description'>{job.description}</div>
                <div className='card-button-wrapper'>
                  <div className='card-information'>Please click on the link below for further information</div>
                  <button className='card-button'>Details</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default JobListings;