import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useStylesGrid} from './muiStyles';
import {zoneInformation} from './zoneData.js';

/** Creates a grid of zone information to explain each zone */
export default function ZoneDataGrid () {

  /** import styles for mui components */
  const classes = useStylesGrid();
  const { zones } = zoneInformation;

  const zoneInfoGrid = zones.map((item, index) =>(
    <Grid key={index} item m={12}>
      <Paper className={classes.paper}>
        <Typography variant="h5">{item.level}</Typography>
        <Typography variant="h6">{item.name}</Typography>
        <Typography>{item.body}</Typography>
      </Paper>
    </Grid>
  ))

  return zoneInfoGrid;
}