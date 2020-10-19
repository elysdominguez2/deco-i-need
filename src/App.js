import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js'
import Home from './componentes/Home.js'
import ItemsList from './componentes/ItemList.js'
import ItemDetailCont from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import Favs from './Favs';
import { CartProvider } from './context/cartContext';
import CategoryList from './componentes/CategoryList';
import PageNotFound from './componentes/PageNotFound';
import Login from './componentes/InfoCart';
import { InfoProvider } from './context/infoContext';





function App() {
  return (
    <InfoProvider>
    <CartProvider>
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

          <Route path="/category/:id">
              <CategoryList/>
          </Route>

          <Route path="/login">
              <Login/>
          </Route>

          

          <Route component={PageNotFound}/>
          

          

        </Switch>
      </BrowserRouter>
    </div>
    </CartProvider>
    </InfoProvider>
  );
}

export default App;