import React from 'react';
import {Link} from "react-router-dom"

const Home = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./ArturoAraujo.jpeg' className="App-logo" alt="logo" />
        <h1>
          Bienvenido Candidato 01
        </h1>
        <h2
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Version 1.0
        </h2>
        <Link to="/productos">
          Continuar
        </Link>
      </header>
    </div>
  );
}

export default Home;