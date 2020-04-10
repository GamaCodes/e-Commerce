import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
// Componente
import Product from './Product';
// Coneccion con Redux
import { connect } from 'react-redux'
import { showVideogames } from '../redux/actions/showVideogames'

class VideogamesList extends Component {
  componentDidMount() {
    this.props.showVideogames();
  }
  renderVideogamesCard() {
    return this.props.videogames.map((product, i) => {
      return (
        <Product product= {product} key={i}/>
      )
    })
  }
  
  render(){
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
            {this.renderVideogamesCard()}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    videogames: state.videogame.list
  }
}

export default connect(mapStateToProps, {showVideogames})(VideogamesList)