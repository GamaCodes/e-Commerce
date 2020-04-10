import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function Product({product}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <img src={product.IMAGE} alt="producto" style={{ width : "50%"}}/>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Descripcion: {product.DESCRIPTION}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Precio: {product.PRICE}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color: red[700]}} fontSize="large"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCart style={{color: green[500]}} fontSize="large"/>
        </IconButton>
      </CardActions>
    
    </Card>
  );
}