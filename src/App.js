import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js'
import Home from './componentes/Home.js'
import ItemsList from './componentes/ItemList.js'
import ItemDetailCont from './componentes/ItemDetailContainer';
import Cart from './Cart';
import Favs from './Favs';



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
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/favs">
            <Favs/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;