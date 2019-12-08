import React from 'react';
import AddJob from '../AddJob/AddJob';
import './Hero.scss';

const Hero = () => {
  return (

    <div>
      <div className="hero-wrapper">
        <div className="hero-headline">Your ReDI Job Finder</div>
        <div className="hero-content">
          <input
            type="text"
            placeholder="Location"
            className="hero-input hero-input-location"
          />
          <input
            type="text"
            placeholder="Profession"
            className="hero-input hero-input-profession"
          />
          <a className="hero-button" href="#jobs">Get ReDI!</a>
        </div>
      </div>
      <AddJob />
    </div>
  );
};

export default Hero;