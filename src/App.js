import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Rutas basicas
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './pages/Error';
// Relojes
import Watches from './pages/Watches';
// Playeras
import Shirts from './pages/Shirts';
// Videojuegos
import Videogames from './pages/Videogames';

// Componentes que deben estar en todas las paginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
        <br/>
        <br/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/productos" component={Products}/>
          <Route exact path="/productos/relojes" component={Watches}/>
          <Route exact path="/productos/playeras" component={Shirts}/>
          <Route exact path="/productos/videojuegos" component={Videogames}/>
          <Route component={Error}/>
        </Switch>  
        <br/>
        <br/>
      <Footer/>
    </>
  );
}

export default App;
