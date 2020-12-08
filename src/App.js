import './App.css';
import React from 'react';
import LaunchContainer from './containers/LaunchContainer';
import NavContainer from './containers/NavContainer';


function App() {
  return (
    <div className="App">
      <NavContainer/>
      <LaunchContainer name="Amelia"/>
    </div>
  );
}


export default App;
