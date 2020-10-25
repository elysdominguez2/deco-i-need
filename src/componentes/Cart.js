import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {CartContext} from '../context/cartContext';
import {InfoContext} from '../context/infoContext';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import Vacio from './imagenes/carritovacio.png';
import IdNumber from './IdNumber';

import './estilos/Cart.css'


const Cart = () => {
    const [agregarCarrito, cart] = useContext(CartContext);
    const infoContext = useContext(InfoContext);

    let newTotalCount = 0;
    let newTotalPrice = 0;
    let prodList = [];
    let prodListDb = [];
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
        prodListDb.push({
            id: productId,
            title: name,
            price: price,
            count: count
        });

    }

    const buyer = infoContext.userData;

    const newOrder = {
        buyer: buyer,
        items: prodListDb,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: newTotalPrice
    };

    if (newTotalCount === 0) {


        if (infoContext.myPurchase) {
            return (
                <div className= "container">
                    <h2>Gracias por su compra</h2>
                    <h3>Su número orden de compra es:  {infoContext.myPurchase}</h3>
                    <button className = "btn btn-dark" >
                        < NavLink to = {`/miscompras`} className = "nav-link" > Ver mis compras </NavLink> 
                    </button>
                    <button className = "btn btn-dark" >
                        <NavLink to = {`/`} className = "nav-link" > Volver a comprar </NavLink> 
                    </button>
                </div>
            )

        } else {
            return ( 
                <div className = "cart">
                    <div className = "container">
                        <div className = "card text-center" >
                            <img src = {Vacio} className = "card-img-top"alt = "carrito-vacio"/>
                            <div className = "card-body" >
                                <h5 className = "card-title" > Tu carrito está vacío </h5> 
                                <button className = "btn btn-dark" >
                                    <NavLink to = {`/`} className = "nav-link" > Elegir productos </NavLink> 
                                </button> 
                            </div> 
                        </div> 
                    </div> 
                </div>
            )
        }
        
    } else {

        let button;
        if (infoContext.isLogin) {
            button = < IdNumber newOrder = {newOrder}/>;
        } else {
            button = < NavLink to = {`/login`} className = "btn btn-dark nav-link" > Carga tus datos </NavLink>;
        }
 
        return ( 
            <div className = "container">
                <h2 className = "titulo"> Mi carrito </h2> 
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Total de productos en el carrito: {newTotalCount}</th>   
                        </tr>
                    </thead>
                        <> {prodList.map((producto) => ( 
                            <tbody key = {producto.id}>
                                    <tr className= "productos">
                                        <td>Prod: {producto.name}</td>
                                        <td>Art: {producto.id}</td>
                                        <td>P. Unit: $ {producto.price}</td>
                                        <td>Cant: {producto.count}</td>
                                        <td >SubTot: $ {producto.price * producto.count}</td>
                                    </tr>
                            </tbody>))} 
                        </> 

                    <thead>
                        <tr>
                            <th scope="col">Precio total de productos en el carrito: $ {newTotalPrice}</th>
                        </tr>
                    </thead>    
                </table>
                
                {button}

            </div>
        )

    }

}
export default Cart;