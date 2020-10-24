import React, { useState, useContext, useEffect } from 'react';
import { getFirestore } from '../firebase/index.js';
import { InfoContext } from '../context/infoContext';
import {NavLink} from 'react-router-dom';

import Form from './Form';
import Loading from './Loading.js';
import Vacio from './imagenes/carritovacio.png';

import './estilos/MisCompras.css'

function MisCompras() {
    const [loading, setLoading] = useState(true);
    const [hayCompras, setHayCompras] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const infoContext = useContext(InfoContext);


    useEffect(() => {
        setLoading(true);

        if (infoContext.isLogin) {

            const db = getFirestore();
            const orders = db.collection("orders")
            const email = infoContext.userData.email;
            orders.where("buyer.email", "==", email)
            .get()
            .then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    setHayCompras(false);
                } else {
                    setHayCompras(true);

                    let newOrderList = [];
                    querySnapshot.forEach(function(doc) {
                        const orderDb = doc.data();

                        let newProdList = [];
                        orderDb.items.forEach(item => {
                            console.log("Item: " + item.title);
        
                            // newTotalCount = newTotalCount + count;
                            // newTotalPrice = newTotalPrice + (price * count);
                    
                            newProdList.push({
                                id: item.id,
                                name: item.title,
                                price: item.price
                            }); 
        
                        })
    
                        let order = {
                            id: doc.id,
                            prodList: newProdList,
                            date: orderDb.date,
                            total: orderDb.total
                        };
                        newOrderList.push(order);
                        
                    });
                    setOrderList(newOrderList);
                }
              
            }).catch((error) => {
                  console.log("Error searching items", error);
            }).finally(() => {
                setLoading(false);
            });
        }

    }, []);
        

      if (infoContext.isLogin) {

        if (loading) {
            return(
                <div className="esperar">
                  <Loading/>
                </div>
              );
        } else {

            if (hayCompras) {
                return (
                    <div className="container">
                            {
                                orderList.map((order) => (
                                    <div className="compras" key = {order.id}>
                                    
                                        <div className= "card">
                                            <div className="card-header">Id de compra:  {order.id}</div>
                                            <div>  
                                                <ul className="list-group list-group-flush"> {order.prodList.map((producto) => ( 
                                                    <ul key = {producto.id}>
                                                            
                                                                <li className="list-group-item">Prod: {producto.name}</li>
                                                                <li className="list-group-item">Art: {producto.id}</li>
                                                                <li className="list-group-item">P. Unit: $ {producto.price}</li>
                                                                {/* <li className="list-group-item">Cant: {producto.count}</li> */}
                                                                {/* <li className="list-group-item" >SubTot: $ {producto.price * producto.count}</li> */}
                                                                
                                                            
                                                    </ul>))} 
                    
                                                    <div className="card-footer">Total: $ {order.total}</div>
                                                
                                                </ul> 
                                            </div>
                                        </div>
                                    </div>
                                    

                                ))
                            }
                    </div>
                );

            } else {
                return ( 
                    <div className = "cart">
                        <div className = "container">
                            <div className = "card text-center" >
                                <img src = {Vacio} className = "card-img-top"alt = "carrito-vacio"/>
                                <div className = "card-body" >
                                    <h5 className = "card-title" > No tienes compras realizadas </h5> 
                                    <button className = "btn btn-dark" >
                                        <NavLink to = {`/`} className = "nav-link" > Elegir productos </NavLink> 
                                    </button> 
                                </div> 
                            </div> 
                        </div> 
                    </div>
                )
            }

        }
            
    } else{
        // No esta logueado
        return (
            <div>
                <p>Necesitas estar logueado</p>
                <Form/>
            </div>
        
        )
    }
     
  };


export default MisCompras;