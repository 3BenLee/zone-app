import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {calculateZones} from 'training-zone-calculator';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {useStylesIndex} from './muiStyles';
import ZoneDataGrid from './zoneDataGrid';

export default function Index() {

  /** State */
  const [ ftp, setFtp ] = useState('');
  const [ showGrid, setShowGrid ] = useState(false);

  /** import styles for mui components */
  const classes = useStylesIndex();

  /** Logic and Handlers */
  let finalResults;
  if (ftp > 0) {
    finalResults = showGrid ? calculateZones(ftp).map((zone, index) => (
      <>
        <Grid key={index} item xs={12}>
          {(index % 2 === 0) && <Paper className={classes.paper}>{`Zone ${index + 1}`}</Paper>}        </Grid>
        <Grid key={index} item xs={6}>
          <Paper className={classes.paper}>{zone}</Paper>
        </Grid>
      </>
    )) : null;
  }

  const handleShowGrid = showGrid => event => {
    setShowGrid(!showGrid);
  }

  const handleReset = showGrid => event => {
    setShowGrid(!showGrid);
    setFtp('');
  }

  return (
    <Container className={classes.root} maxWidth="sm">
      <Box className={classes.box} my={4}>
        <Paper className={classes.titleContainer}>
          <Typography
              className={classes.title}
              display='inline'
              variant="h4"
              gutterBottom
            >
            Watts the Matter?
          </Typography>
        </Paper>
        <TextField
          className={classes.textField}
          id="outlined-simple-start-adornment"
          variant="outlined"
          label="FTP"
          value={ftp}
          onChange={e => setFtp(e.target.value)}
        />
        <Button
          className={classes.getZonesButton}
          variant="outlined"
          color="primary"
          onClick={handleShowGrid(showGrid)}
        >
          Get Zones
        </Button>
        <Button
          className={classes.resetButton}
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
        <ZoneDataGrid />
      </Box>
    </Container>
  );
}
