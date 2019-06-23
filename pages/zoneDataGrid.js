import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {zoneInformation} from './zoneData.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

/** Creates a grid of zone information to explain each zone */
export default function ZoneDataGrid () {
  const classes = useStyles();
  const { zones } = zoneInformation;

  const zoneInfoGrid = zones.map((item, index) =>(
    <Grid key={index} item m={12}>
      <Paper className={classes.paper}>{item.level}</Paper>
      <Paper className={classes.paper}>{item.name}</Paper>
      <Paper className={classes.paper}>{item.body}</Paper>
    </Grid>
  ))

  return zoneInfoGrid;
}