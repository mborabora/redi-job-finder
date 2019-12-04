import './Searchbar.scss';
import React, { useState } from 'react'

const Searchbar = () => {
    const [input, setInput] = useState({})
    const handleInputChange = (e) => setInput({
      ...input,
      [e.currentTarget.location]: e.currentTarget.position
    })
  
    return (
      <form className='input-fields'>
        <div className='location-margin'>
          <input className='input-padding' type="text" placeholder="Location" onChange={handleInputChange} />
        </div>
        <div className='position-margin'>
          <input className='input-padding' type="text" placeholder="Position" onChange={handleInputChange} />
        </div>
        <button className='submit-margin' type="submit">ReDI</button>
      </form>
    )
  }
  
  export default Searchbar;



