import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
// Componente
import Product from './Product';
// Coneccion con Redux
import { connect } from 'react-redux'
import { showWatches } from '../redux/actions/showWatches'

class WatchesList extends Component {
  componentDidMount() {
    this.props.showWatches();
  }
  renderWatchesCard() {
    return this.props.watches.map((product, i) => {
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
            {this.renderWatchesCard()}
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    watches: state.watch.list
  }
}

export default connect(mapStateToProps, {showWatches})(WatchesList)