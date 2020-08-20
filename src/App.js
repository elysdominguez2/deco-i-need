import React from 'react';
import logo from './logoD.png';
import './App.css';
import NavBar from './componentes/NavBar.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esto es DECO I NEED
        </p>
        
      </header>
    </div>
  );
}

export default App;