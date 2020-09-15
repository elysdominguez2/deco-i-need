import React from "react";
import './Item.css';
import ItemCount from "./ItemCount";
      
   function Item(props) {  
     return (  
       <div className= "prodItems">  
         <li key={props.producto.id}>{props.producto.foto} {props.producto.nombre} <p>Stock :</p> {props.producto.stock}</li>
         <ItemCount max={props.producto.stock} min="0"/>
       </div>  
     );  
   };

   export default Item;