import React from 'react';
import ShirtsList from '../components/ShirtsList';
import Pagination from '@material-ui/lab/Pagination';

const Shirts = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Playeras
        </h1>
        <ShirtsList/>
      </header>
      <br/>
      <Pagination count={3} style={{backgroundColor: "white"}} />
    </div>
  );
}

export default Shirts;