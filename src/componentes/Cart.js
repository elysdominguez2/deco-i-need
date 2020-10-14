import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {CartContext} from '../context/cartContext';
import './Cart.css'
import Vacio from './imagenes/carritovacio.png';
import { getFirestore } from '../firebase/index.js'


const Cart = () =>{
    const [agregarCarrito, cart] = useContext(CartContext);
    //const [prodInfoList, setProdInfoList] = useState([]);
    //const [prodInfoObj, setProdInfoObj] = useState({});

    let newTotalCount=0;
    let prodList = [];
    for (const productId in cart) {

        // Con el id que tenes en productId
        // buscar en la base de datos
        // el producto con el id productId

        // Tenés que hacer lo mismo que en ItemDetailContainer
        // const item = itemCollection.doc(id);

        // Quizás podes hacer
        // const item = getItem(productId);

        newTotalCount=newTotalCount + cart[productId];
        ///let ppp = 
        prodList.push({id: productId, count: cart[productId]});
        //const product = getItem(productId);
        //console.log("Producto1: " + product.description);
        //prodList.push({id: productId, name: item.name, count: cart[productId]});
        
    }
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

        return(
            <div className="container">
                <h2 className="titulo">Mi carrito</h2>
                <span>Total de productos en el carrito: {newTotalCount}</span>
                <ul className="list-group">
                    {prodList.map((producto) => ( 
                        <div key={producto.id}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {producto.id}
                                <span className="badge badge-dark badge-pill">{producto.count}</span>
                            </li>
                        </div>
                  ))}
                </ul>
                <button className="btn btn-dark">
                            <NavLink to={`/login`} className="nav-link">Pagar</NavLink>
                </button>

                
                
            </div>
        )

    }

}
export default Cart;