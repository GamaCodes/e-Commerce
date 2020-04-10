import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
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
      <br/>
      <Pagination count={3} style={{backgroundColor: "white"}} />
    </div>
  );
}

export default Watches;