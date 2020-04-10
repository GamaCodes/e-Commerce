import React from 'react';
import {Link} from "react-router-dom"

const Home = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src='./ArturoAraujo.jpeg' className="App-logo" alt="logo" />
        <h1>
          Hello From Home
        </h1>
        <Link to="/">
          Continuar
        </Link>
      </header>
    </div>
  );
}

export default Home;