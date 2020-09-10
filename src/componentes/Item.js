import React from "react";
import './Item.css';
      
   function Item(props) {  
     return (  
       <div className= "probando">  
         <li key={props.producto.id}>{props.producto.foto} {props.producto.nombre} <p>Stock :</p> {props.producto.stock}</li>  
       </div>  
     );  
   };

   export default Item;