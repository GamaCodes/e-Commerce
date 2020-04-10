import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
// Componente
import Product from './Product';
// Coneccion con Redux
import { connect } from 'react-redux'
import { showShirts} from '../redux/actions/showShirts'

class ShirtsList extends Component {
  componentDidMount() {
    this.props.showShirts();
  }
  renderShirtsCard() {
    return this.props.shirts.map((product, i) => {
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
            {this.renderShirtsCard()}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    shirts: state.shirt.list
  }
}

export default connect(mapStateToProps, {showShirts})(ShirtsList)