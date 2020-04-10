import React from 'react';
import VideogamesList from '../components/VideogamesList';

const Videogames = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Videogames
        </h1>
        <VideogamesList/>
      </header>
    </div>
  );
}

export default Videogames;