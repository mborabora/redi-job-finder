import React, { useState } from 'react';
import './AddJob.scss';

const AddJob = () => {
  const [showNewJobModal, setShowNewJobModal] = useState(false);

  const changeShowJobModal = () => {
    setShowNewJobModal(!showNewJobModal);
  };

  let showJobModal;
  showJobModal = showNewJobModal ? (
    <div className="modal-container">
      <h1 className="modal-headline">You got a job for us - awesome!</h1>
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
       <input
        type="text"
        placeholder="Link"
        class="hero-input hero-input-link"
      />
      <button className="hero-button">
        Add job
      </button>
    </div>
  ) : null;

  return (
    <div className="hero-addJob">
      {showJobModal}
      <div className="addJob-button" onClick={changeShowJobModal}>
        <div className="addJob-button-plus">+</div>
      </div>
    </div>
  );
};

export default AddJob;