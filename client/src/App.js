import React from 'react';
import { Grid } from '@mui/material';
import Details from './components/Details/Details';

const App = () => {
  return (
    <div>
      <Grid container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details/>
        </Grid>
      </Grid>
      <Details/>
    </div>
  )
}

export default App;