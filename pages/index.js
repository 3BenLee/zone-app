import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ZoneGrid from './zone-grid';

export default function Index() {
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
          InputProps={{
            startAdornment: <InputAdornment position="start">Watts</InputAdornment>,
          }}
        />
        <Button variant="outlined" color="primary">
          Get Zones
        </Button>
      <ZoneGrid />
      </Box>
    </Container>
  );
}
