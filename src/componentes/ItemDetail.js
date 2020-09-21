import React from "react";
import {NavLink} from 'react-router-dom';
import ItemCount from "./ItemCount";
import './ItemDetail.css';
import Agregar from "./ContadorGlobal";


      
   function ItemDetail(props) {  
     return ( 
       
      <div class="products-list-container">
            <div className="container" key={props.prod.id}>
                <div className="product-image">{props.prod.foto}</div>
                <div className="product-info"> 
                  <h3 className="product-name">{props.prod.nombre} {props.prod.id}</h3> 
                  <p className="texto">{props.prod.descripcion}</p> 
                  <p className="texto">Stock : {props.prod.stock}</p>
                  <h5 className="product-price">${props.prod.precio}</h5>
                  <ItemCount max={props.prod.stock} min="0"/>
                  <Agregar/>
                  <button className="btn btn-dark">
                    <NavLink to={`/cart`} className="nav-link">Comprar ahora</NavLink>
                  </button>
                </div> 
            </div>
        </div>
         
        
     );  
   };

   export default ItemDetail;

  
   
