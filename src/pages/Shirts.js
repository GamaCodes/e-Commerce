import React from 'react';
import ShirtsList from '../components/ShirtsList';

const Shirts = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Shirts
        </h1>
        <ShirtsList/>
      </header>
    </div>
  );
}

export default Shirts;