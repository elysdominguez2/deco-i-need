import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {CartContext} from '../context/cartContext';
import './Cart.css'
import Vacio from './imagenes/carritovacio.png';

const Cart = () =>{
    const [agregarCarrito, cart] =useContext(CartContext);

    let newTotalCount=0;
    let prodList = [];
    for (const productId in cart) {
        newTotalCount=newTotalCount + cart[productId];
        prodList.push({id: productId, count: cart[productId]});
    }
    if(newTotalCount == 0){
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
    };




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
            
            <br></br>
            <span>Total price:0</span>
        </div>
    )
}
export default Cart;