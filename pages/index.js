import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { calculateZones } from 'training-zone-calculator';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Index() {

  /** State */
  const [ ftp, setFtp ] = useState();
  const [ showGrid, setShowGrid ] = useState(false);

  /** Material UI styles */
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: '#98B0B9',
    },
  }));
  const classes = useStyles();

  /** Logic and Handlers */
  let finalResults;
  if (ftp > 0) {
    finalResults = showGrid ? calculateZones(ftp).map((zone, index) => (
      <Grid key={index} item xs={4}>
        <Paper className={classes.paper}>{zone}</Paper>
      </Grid>
    )) : null
  }

  const handleShowGrid = showGrid => event => {
    setShowGrid(!showGrid);
  }

  const handleReset = showGrid => event => {
    setShowGrid(!showGrid);
    setFtp('');
  };


  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography display='inline'>Let's</Typography>
        <img display='inline' src='.images/icons8-taco-48.png' alt="logo"/>
        <Typography display='inline'>Bout Watts</Typography>
        <TextField
          id="outlined-simple-start-adornment"
          variant="outlined"
          label="FTP"
          value={ftp}
          onChange={e => setFtp(e.target.value, console.log('set fired'))}
          InputProps={{
            startAdornment: <InputAdornment position="start">Ben</InputAdornment>,
          }}
        />
        <Button variant="outlined" color="primary" onClick={handleShowGrid(showGrid)}>
          Get Zones
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleReset(!showGrid)}
        >
          Reset
        </Button>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {finalResults}
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
