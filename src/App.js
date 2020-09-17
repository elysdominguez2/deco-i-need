import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js'
import Home from './componentes/Home.js'
import ItemsList from './componentes/ItemList.js'
import ItemDetailCont from './componentes/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home name="Elys"/>
            <ItemsList/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailCont/>

          </Route>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;