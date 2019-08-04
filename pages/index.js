import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {calculateZones} from 'training-zone-calculator';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {useStylesIndex} from './muiStyles';
import ZoneDataGrid from './zoneDataGrid';
import { style } from '@material-ui/system';

export default function Index() {

  /** State */
  const [ ftp, setFtp ] = useState('');
  const [ showGrid, setShowGrid ] = useState(false);

  /** import styles for mui components */
  const classes = useStylesIndex();

  /** Logic and Handlers */
  const muiGrowProps = {
    in: showGrid,
    style: {transformOrigin: '0 0 0'}
  }

  const finalResults = ftp && ftp > 0 && showGrid &&
    calculateZones(ftp).map((zone, index) => (
      <>
        <Grow {...muiGrowProps} {...(showGrid ? { timeout: 1000 } : {})}>
          <Grid className={style.Grid} key={`${index}${Math.random()}`} item xs={12}>
            {(index % 2 === 0) && <Paper className={classes.zonePaper}>{`Zone ${index + 1}`}</Paper>}
          </Grid>
        </Grow>
        <Grow {...muiGrowProps} {...(showGrid ? { timeout: 1300 } : {})}>
          <Grid className={style.Grid} key={index} item xs={4}>
            <Paper className={classes.zoneRangePaper}>{zone}</Paper>
          </Grid>
        </Grow>
      </>
    ))

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
          inputProps={{className: classes.input}}
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
