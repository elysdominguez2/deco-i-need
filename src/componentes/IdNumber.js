import React, {useState, useEffect} from 'react';
import { getFirestore } from '../firebase/index.js'

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
        console.log(id);
    }).catch((error) => {
        setError(error);
    }).finally(() => {
        setLoading(false);
    });
};

return <button onClick={enviarDatos} className="btn btn-dark">Pagar</button>
}

export default IdNumber;