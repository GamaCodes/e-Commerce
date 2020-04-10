import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  appBar: {
    top: 'auto',
    bottom: 0,
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src="./logoBlanco.png" alt="Gapsi"/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}