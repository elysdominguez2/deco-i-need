import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import ItemCount from "./ItemCount";
import './ItemDetail.css';
import BotonAgregar from "./ContadorGlobal";


function ItemDetail(props) {

  const [count, setCount] = useState(0);


  const realizarSuma = () => {
    const max= props.prod.stock;
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
      
        <div class="products-list-container">
            <div className="container" key={props.prod.id}>
                <div className="product-image">{props.prod.foto}</div>
                <div className="product-info"> 
                  <h3 className="product-name">{props.prod.nombre} {props.prod.id}</h3> 
                  <p className="texto">{props.prod.descripcion}</p> 
                  <p className="texto">Stock : {props.prod.stock}</p>
                  <h5 className="product-price">${props.prod.precio}</h5>
                  <ItemCount count={count} sumar={realizarSuma} restar={realizarResta}/>
                  <BotonAgregar count={count}/>
                  <button className="btn btn-dark">
                    <NavLink to={`/cart`} className="nav-link">Comprar ahora</NavLink>
                  </button>
                 
                </div> 
            </div>
      </div>
  );
}

export default ItemDetail;