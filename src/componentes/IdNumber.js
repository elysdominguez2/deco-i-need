import React, {useState} from 'react';
import { getFirestore } from '../firebase/index.js'
import {NavLink} from 'react-router-dom';

export function IdNumber (props){
        const [orderId, setOrderId] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("");
        
        const enviarDatos = () => {

                const db = getFirestore();

                const orders = db.collection("orders");

                const newOrder= props.newOrder;

                orders.add(newOrder)
                .then(({ id }) => {
                        setOrderId(id);
                        console.log("Este es tu número de Orden de Compra: " + id);
                        alert("Este es tu número de Orden de Compra: " + id);
                    }).catch((error) => {
                            setError(error);
                        }).finally(() => {
                                setLoading(false);
                            });
        };

    return (
        <div>
            <button onClick={enviarDatos} className="btn btn-dark">Pagar</button>
        </div>
    )
}

export default IdNumber;
