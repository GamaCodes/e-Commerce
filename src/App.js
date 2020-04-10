import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Rutas basicas
import Welcome from './pages/Welcome';
import Home from './pages/Home';
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
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/inicio" component={Home}/>
          <Route exact path="/relojes" component={Watches}/>
          <Route exact path="/playeras" component={Shirts}/>
          <Route exact path="/videojuegos" component={Videogames}/>
          <Route component={Error}/>
        </Switch>  
        <br/>
        <br/>
      <Footer/>
    </>
  );
}

export default App;
