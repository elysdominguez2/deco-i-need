import React, { useContext } from 'react';
import { InfoContext } from '../context/infoContext';
import {CartContext} from '../context/cartContext';

import Form from './Form';

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
                <div className="compras">
                    <p>Id de compra:  {infoContext.myPurchase}</p>
                    <p>Mis articulos y precios </p>
                    <div>  
                        <ul > {prodList.map((producto) => ( 
                            <div key = {producto.id}>
                                    <tr className= "productos">
                                        <td>Prod: {producto.name}</td>
                                        <td>Art: {producto.id}</td>
                                        <td>P. Unit: $ {producto.price}</td>
                                        <td>Cant: {producto.count}</td>
                                        <td >SubTot: $ {producto.price * producto.count}</td>
                                    </tr>
                            </div>))} 
                        </ul> 
                    </div>

                </div>
        ); } else{

            return (
                <div>
                    <p>Necesitas estar logueado</p>
                    <Form/>
                </div>
            
            )}
        // } if(cart esta vacio){
        //     return ( 
        //         <div className = "cart">
        //             <div className = "container">
        //                 <div className = "card text-center" >
        //                     <img src = {Vacio} class = "card-img-top"alt = "carrito-vacio"/>
        //                     <div className = "card-body" >
        //                         <h5 lass = "card-title" > No tienes compras realizadas </h5> 
        //                         <button className = "btn btn-dark" >
        //                             <NavLink to = {`/`} className = "nav-link" > Elegir productos </NavLink> 
        //                         </button> 
        //                     </div> 
        //                 </div> 
        //             </div> 
        //         </div>
        //     )
        // }
     
  };
}

export default MisCompras;