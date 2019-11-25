import React from 'react';
import './Hero.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div>
        <form noValidate autoComplete="off" style={{ display: 'flex', paddingBottom: 100 }}>
          <TextField id="outlined-basic" label="Position" variant="outlined" classes={{ root: 'text-input-root' }} />
          <TextField id="outlined-basic" label="City" variant="outlined" classes={{ root: 'text-input-root' }} />
          <Button variant="outlined"  classes={{ root: 'button-root' }}>
            ReDI
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;