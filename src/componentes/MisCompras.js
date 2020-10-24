import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext';
import {CartContext} from '../context/cartContext';
import {NavLink} from 'react-router-dom';

import Form from './Form';
import Vacio from './imagenes/carritovacio.png';

import './estilos/MisCompras.css'

function MisCompras() {
    
    const infoContext = useContext(InfoContext);
    const [agregarCarrito, cart] = useContext(CartContext);

    let newTotalCount = 0;
    let newTotalPrice = 0;
    let prodList = [];
    
    for (const productId in cart) {

        const [name, price, count] = cart[productId];
        newTotalCount = newTotalCount + count;
        newTotalPrice = newTotalPrice + (price * count);

        prodList.push({
            id: productId,
            name: name,
            price: price,
            count: count
        });
        

      if (infoContext.isLogin) {
          
            return (
                <div className="container">
                    <div className="compras">
                        <h3>Tu compra se realizó con éxito</h3>
                        <div className= "card">
                        <div className="card-header">Id de compra:  {infoContext.myPurchase}</div>
                        <div>  
                            <ul className="list-group list-group-flush"> {prodList.map((producto) => ( 
                                <div key = {producto.id}>
                                        
                                            <li className="list-group-item">Prod: {producto.name}</li>
                                            <li className="list-group-item">Art: {producto.id}</li>
                                            <li className="list-group-item">P. Unit: $ {producto.price}</li>
                                            <li className="list-group-item">Cant: {producto.count}</li>
                                            <li className="list-group-item" >SubTot: $ {producto.price * producto.count}</li>
                                            
                                        
                                </div>))} 

                                <div className="card-footer">Total: $ {newTotalPrice}</div>
                            
                            </ul> 
                        </div>
                        </div>

                    </div>
                </div>
        ); } else{

            return (
                <div>
                    <p>Necesitas estar logueado</p>
                    <Form/>
                </div>
            
            )}
        } if(newTotalCount === 0){
            return ( 
                <div className = "cart">
                    <div className = "container">
                        <div className = "card text-center" >
                            <img src = {Vacio} class = "card-img-top"alt = "carrito-vacio"/>
                            <div className = "card-body" >
                                <h5 lass = "card-title" > No tienes compras realizadas </h5> 
                                <button className = "btn btn-dark" >
                                    <NavLink to = {`/`} className = "nav-link" > Elegir productos </NavLink> 
                                </button> 
                            </div> 
                        </div> 
                    </div> 
                </div>
            )
        }
     
  };


export default MisCompras;