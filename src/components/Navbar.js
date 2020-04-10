import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "rgb(151, 27, 27)",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/productos">
              <img src="./logoBlanco.png" alt="Gapsi"/>
            </Link>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MoreVert />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/productos/relojes"><MenuItem onClick={handleClose}>Relojes</MenuItem></Link>         
            <Link to="/productos/playeras"><MenuItem onClick={handleClose}>Playeras</MenuItem></Link>          
            <Link to="/productos/videojuegos"><MenuItem onClick={handleClose}>Videojuegos</MenuItem></Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}