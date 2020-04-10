import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from '../components/Product';


const Watches = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Relojes
        </h1>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>

              <Product/>
              <Product/>
              <Product/>

            </Grid>
          </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default Watches;