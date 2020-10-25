import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { CartProvider } from './context/cartContext';
import { InfoProvider } from './context/infoContext';

import NavBar from './componentes/NavBar.js'
import ItemsList from './componentes/ItemList.js'
import ItemDetailCont from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import CategoryList from './componentes/CategoryList';
import PageNotFound from './componentes/PageNotFound';
import Login from './componentes/Form';
import MisCompras from './componentes/MisCompras';

import './App.css';



function App() {
  return (
    <InfoProvider>
      <CartProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar/>
            <Switch>

              <Route exact path="/">
                <ItemsList/>
              </Route>

              <Route path="/item/:id">
                <ItemDetailCont/>
              </Route>
              
              <Route path="/cart">
                <Cart/>
              </Route>

              <Route path="/category/:id">
                  <CategoryList/>
              </Route>

              <Route path="/login">
                  <Login/>
              </Route>

              <Route path="/miscompras">
                  <MisCompras/>
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