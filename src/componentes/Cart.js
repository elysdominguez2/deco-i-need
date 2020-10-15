import React, {useContext, useEffect, useState} from 'react';
import { InfoContext } from '../context/infoContext';

import {NavLink} from 'react-router-dom';
import {CartContext} from '../context/cartContext';
import './Cart.css'
import Vacio from './imagenes/carritovacio.png';
import { getFirestore } from '../firebase/index.js'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import IdNumber from './IdNumber';


const Cart = () =>{
    const [agregarCarrito, cart] = useContext(CartContext);
    const infoContext = useContext(InfoContext);
   
    //const [prodInfoList, setProdInfoList] = useState([]);
    
    //const [prodInfoObj, setProdInfoObj] = useState({});

    let newTotalCount=0;
    let newTotalPrice=0;
    let prodList = [];
    let prodListDb = [];
    for (const productId in cart) {

        const [name, price, count] = cart[productId];
        newTotalCount = newTotalCount + count;
        newTotalPrice = newTotalPrice + (price * count);

        prodList.push({id: productId, name: name, price: price, count: count});
        prodListDb.push({id: productId, title: name, price: price});
        
    }

    
    

    const buyer = {
        name: "Ely",
        phone: "1111111",
        email: "mail@gmail.com"
    }

    const newOrder = {
        buyer: buyer,
        items: prodListDb,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: newTotalPrice
    };

    

   



    if(newTotalCount === 0){
        return (
            <div className="cart">
                <div className="container">
                    <div className="card text-center">
                        <img src={Vacio} class="card-img-top" alt="carrito-vacio"/>
                        <div className="card-body">
                        <h5 lass="card-title">Tu carrito está vacío</h5>
                        <button className="btn btn-dark">
                            <NavLink to={`/`} className="nav-link">Elegir productos</NavLink>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {

        let button;
      if (infoContext.isLogin) {
        button = <IdNumber  newOrder={newOrder} />;
      }else{
        button = <NavLink to={`/login`} className="btn btn-dark">Carga tus datos</NavLink>;
    }
    

        return(
            <div className="container">
                <h2 className="titulo">Mi carrito</h2>
                <span>Total de productos en el carrito: {newTotalCount}</span>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span>Nombre</span>
                        <span>Art</span>
                        <span>Precio</span>
                        <span> Cant</span>
                        <span>Sub</span>
                        
                    </li>
                </ul>
                
                
                <ul className="list-group">
                    {prodList.map((producto) => ( 
                        <div key={producto.id}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{producto.name}</span>
                                <p>{producto.id}</p>
                                <span>${producto.price}</span>
                                <span className="badge badge-dark badge-pill">{producto.count}</span>
                                <span>${producto.price * producto.count}</span>
                                
                            </li>
                        </div>
                  ))}
                </ul>
                <span>Precio total de productos en el carrito: ${newTotalPrice}</span>
                <br/>

                {button}

                
                
            </div>
        )

    }

}
export default Cart;