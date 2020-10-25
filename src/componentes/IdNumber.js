import React, {useState, useContext} from 'react';
import { getFirestore } from '../firebase/index.js'
import {NavLink} from 'react-router-dom';
import { InfoContext } from '../context/infoContext';
import { CartContext } from '../context/cartContext.js';
import MisCompras from './MisCompras.js';

export function IdNumber (props){
        const [orderId, setOrderId] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("");
        const [agregarCarrito, cart, resetCarrito] = useContext(CartContext);
        const infoContext = useContext(InfoContext);
        
        const enviarDatos = () => {

                const db = getFirestore();

                const orders = db.collection("orders");

                const newOrder= props.newOrder;

                orders.add(newOrder)
                .then(({ id }) => {
                        setOrderId(id);
                        console.log("Este es tu número de Orden de Compra: " + id);
                        alert("Este es tu número de Orden de Compra: " + id);
                        infoContext.setMyPurchase(id);
                        resetCarrito();
                        
                    }).catch((error) => {
                        setError(error);
                    }).finally(() => {
                        setLoading(false);
                    });
        };

    return (
        <div>
            <button onClick={enviarDatos} className="btn btn-dark">Pagar</button>
            < NavLink to = {`/miscompras`} className = "btn btn-dark" > Mis compras </NavLink>
        </div>
        
    )
}

export default IdNumber;


