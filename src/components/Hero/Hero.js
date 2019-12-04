import React from 'react';
import AddJob from '../AddJob/AddJob';
import './Hero.scss';

const Hero = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero-headline">Welcome to ReDI Job Finder</div>
        <div className="hero-content">
          <input
            type="text"
            placeholder="Location"
            class="hero-input hero-input-location"
          />
          <input
            type="text"
            placeholder="Profession"
            class="hero-input hero-input-profession"
          />
          <button className="hero-button">Get ReDI!</button>
        </div>
      </div>
      <AddJob />
    </div>
  );
};

export default Hero;