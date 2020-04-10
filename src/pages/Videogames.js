import React from 'react';
import VideogamesList from '../components/VideogamesList';
import Pagination from '@material-ui/lab/Pagination';

const Videogames = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Videogames
        </h1>
        <VideogamesList/>
      </header>
      <br/>
      <Pagination count={3} style={{backgroundColor: "white"}} />
    </div>
  );
}

export default Videogames;