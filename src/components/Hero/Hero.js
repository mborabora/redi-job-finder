import React, { useState } from 'react';
import './Hero.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const styles = {
  jobCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    width: 250,
    backgroundColor: "white",
    position: "absolute",
    bottom: 40,
    right: 10,
    padding: 20,
    borderRadius: 5,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  }
};

const Hero = () => {
  const classes = useStyles();
  const [showButtonContent, setShowButtonContent] = useState(false);

  const showOptions = () => {
    setShowButtonContent(!showButtonContent);
  };

  let buttonContent;
  if (showButtonContent) {
    buttonContent = (
      <div style={styles.jobCard}>
        <h3 style={{ textAlign: "center" }}>
          Wohoo, you got a job for us!
        </h3>
        <TextField
          required
          id="standard-required"
          label="Position"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="City"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="standard-required"
          label="Link"
          className={classes.textField}
          margin="normal"
        />
        <Button variant="outlined" color="primary">ReDI</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="hero-wrapper">
        <div>
          <form noValidate autoComplete="off">
            <TextField id="filled-basic" label="Position" variant="filled" />
            <TextField id="outlined-basic" label="City" variant="outlined" />
            <Button>ReDI</Button>
          </form>
        </div>
      </div>
      <div className="row" style={{ position: 'relative' }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={showOptions}
          style={{ position: "absolute", bottom: -28, right: 20 }}
        >
          <AddIcon />
        </Fab>
        {buttonContent}
      </div>
    </div>
  );
};

export default Hero;