import React from 'react';
import logo from './logoD.png';
import './App.css';
import NavBar from './componentes/NavBar.js'
import Home from './componentes/Home.js'
import AgregarProducto from './componentes/AgregarProducto';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home name="Elys"/>
      <header className="App-header">
        
      </header>

      <body className="App-body">
      <AgregarProducto/>
      </body>
    </div>
  );
}

export default App;