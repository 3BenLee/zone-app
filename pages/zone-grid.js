import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { calculateZones } from 'training-zone-calculator';

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

export default function ZoneGrid () {
  const classes = useStyles();

  const results = calculateZones(234).map((zone, index) => (
    <Grid key={index} item xs={4}>
      <Paper className={classes.paper}>{zone}</Paper>
    </Grid>
  ))
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {results}
      </Grid>
    </div>
  )
}