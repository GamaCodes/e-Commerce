import React from 'react';

import WatchesList from '../components/WatchesList';



const Watches = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Relojes
        </h1>
        <WatchesList/>
      </header>
    </div>
  );
}

export default Watches;