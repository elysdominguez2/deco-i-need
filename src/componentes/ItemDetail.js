import React, { useState, useEffect, useContext } from "react";
import {NavLink} from 'react-router-dom';
import ItemCount from "./ItemCount";
import './ItemDetail.css';
import BotonAgregar from "./ContadorGlobal";




function ItemDetail(props) {

  const [count, setCount] = useState(0);
 
  const realizarSuma = () => {
    const max= props.producto.stock;
    if (count >= max){
        return;
    }else{
    setCount ((prevCount) =>
    {return prevCount +1;
    
    });
}
};

  const realizarResta = () => {
    const min=0;
    if (count <= min){
        return;
    }else{
    setCount ((prevCount) =>
    {return prevCount -1;
       
    });
}
};
  return (
      
        <div className  ="products-list-container">
            <div className="container" key={props.producto.id}>
                <img className="product-image" src={props.producto.img} alt="..."/>
                <div className="product-info"> 
                  <h3 className="product-name"> {props.producto.name} {props.producto.title}</h3> 
                  <p className="texto">{props.producto.description}</p> 
                  <p className="texto">Stock : {props.producto.stock}</p>
                  <h5 className="product-price">${props.producto.price}</h5>
                  <ItemCount count={count} sumar={realizarSuma} restar={realizarResta}/>
                  
                  <BotonAgregar id={props.producto.id} count={count}/>
                  
                  <button className="btn btn-dark">
                    <NavLink to={`/cart`} className="nav-link">Comprar ahora</NavLink>
                  </button>
                 
                </div> 
            </div>
      </div>
  );
}

export default ItemDetail;