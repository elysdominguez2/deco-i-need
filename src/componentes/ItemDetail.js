import React from "react";
import ItemCount from "./ItemCount";
import './ItemDetail.css';
import Comprar from "./ContadorGlobal";


      
   function ItemDetail(props) {  
     return (  
       <div className= "prodItems">  
         <li>
            <div key={props.prod.id}>
                <div>{props.prod.foto}</div> 
                <h3>{props.prod.nombre} {props.prod.id}</h3> 
                <p>{props.prod.descripcion}</p> 
                <p>Stock : {props.prod.stock}</p>
                <h5>${props.prod.precio}</h5>
            </div>
        </li>
         <ItemCount max={props.prod.stock} min="0"/>
         <Comprar/>
       </div>  
     );  
   };

   export default ItemDetail;

  
   
